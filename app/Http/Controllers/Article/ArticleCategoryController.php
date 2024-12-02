<?php

namespace App\Http\Controllers\Article;

use App\Http\Controllers\Controller;
use App\Http\Resources\Article\ArticleItemResource;
use App\Models\Article\Article;
use App\Models\Article\ArticleCategory;
use Illuminate\Http\Request;

class ArticleCategoryController extends Controller
{
    public function show(ArticleCategory $category)
    {
        $article = Article::query()
        ->where('articleCategory_id', $category->id)
        ->select('title', 'slug', 'user_id', 'picture', 'teaser', 'created_at', 'id')
        ->with(['tags' => fn($tag) =>$tag->select('name', 'slug')])
        ->latest()
        ->fastPaginate(12);
        
        return inertia('article/category', [
            'category' => $category,
            'data' => ArticleItemResource::collection($article),
        ]);
    }
}
