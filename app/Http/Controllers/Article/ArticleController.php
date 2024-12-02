<?php

namespace App\Http\Controllers\Article;

use App\Data\AuthenticatedUserData;
use App\Http\Controllers\Controller;
use App\Http\Requests\Article\ArticleRequest;
use App\Http\Resources\Article\ArticleItemResource;
use App\Http\Resources\Article\ArticleSingleResource;
use App\Http\Resources\Article\ArticleTableResource;
use App\Models\Article\Article;
use App\Models\Article\ArticleTag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    public $articleTags;

    public function __construct()
    {   
        $this->articleTags = ArticleTag::select('id', 'name')->get();
    }

    public function __invoke(Request $request)
    {
        $article = Article::query()
        ->select('title', 'slug', 'picture', 'user_id', 'teaser', 'created_at', 'id')
        ->with(['tags' => fn($tag) =>$tag->select('name', 'slug')])
        ->latest()
        ->fastPaginate(12);

        return inertia('article/home', [
            'title' => 'Article', 
            'data' => ArticleItemResource::collection($article)
        ]);
    }

    public function create()
    {
        return inertia('article/dashboard/create', [
            'articleTags' => $this->articleTags,
        ]);
    }
    
    public function store(ArticleRequest $request)
    {
        $picture = $request->file('picture');
        $article = $request->user()->article()->create([
            'title' => $title = $request->title,
            'slug' => $slug = str($title)->slug(),
            'teaser' => $request->teaser,
            'articleCategory_id' => $request->articleCategory_id,
            'body' => $request->body,
            'picture' => $request->hasFile('picture') ? $picture->storeAs('public', $slug .'.'. $picture->extension()) : null,

        ]);

        $article->tags()->attach($request->article_tags);

        return to_route('home');
    }

    public function edit(Article $article)
    {
        return inertia('article/dashboard/edit', [
            'article' => $article->load([
                'tags' => fn ($query) => $query->select('name', 'slug', 'id'),
                'category' => fn ($query) => $query->select('name', 'slug', 'id')
                ]),
            'articleTags' => $this->articleTags,
        ]);
    }

    public function update(ArticleRequest $request, Article $article)
    {
        $picture = $request->file('picture');
        $article->update([
            'title' => $title = $request->title,
            'slug' => $slug = str($title)->slug(),
            'teaser' => $request->teaser,
            'articleCategory_id' => $request->articleCategory_id,
            'body' => $request->body,
            'picture' => $request->hasFile('picture') ? $picture->storeAs('public', $slug .'.'. $picture->extension()) : null,
        ]);

        $article->tags()->sync($request->article_tags);

        return to_route('home');
    }
    
    public function show(Article $article)
    { 
        $articles = Article::query()
        ->select('title', 'slug', 'picture', 'user_id', 'teaser', 'body', 'created_at', 'id')
        ->with(['tags' => fn($tag) =>$tag->select('name', 'slug')])
        ->whereNot('id', $article->id)
        ->where('articleCategory_id', $article->articleCategory_id)
        ->latest()
        ->limit(3)
        ->get();
        $article->load([
            'tags' => fn ($query) => $query->select('name', 'slug'),
            'category' => fn ($query) => $query->select('id','name', 'slug'),
        ]);
        return inertia('article/show', [
            'article' => (new ArticleSingleResource($article))->additional([
                'related' => (ArticleItemResource::collection($articles))
            ]),
        ]);
    }
    
    public function table(Request $request)
    {
        $articles = Article::query()
            ->with([
                'author',
                'tags' => fn ($query) => $query->select('name', 'slug', 'id'),
                'category' => fn ($query) => $query->select('name', 'slug', 'id'),
            ])
            ->latest()
            ->fastPaginate(20);

        return inertia('article/dashboard/home',[
            'articles' => ArticleTableResource::collection($articles),
        ]);
    }

    public function destroy(Article $article)
    {
        if ($article->picture) {
            Storage::delete($article->picture);
        }
        $article->tags()->detach();
        $article->delete();
        return back();
    }
}
