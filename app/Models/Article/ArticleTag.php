<?php

namespace App\Models\Article;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticleTag extends Model
{
    use HasFactory;

    public function article()
    {
        return $this->belongsToMany(Article::class)
        ->select('id', 'title', 'slug', 'picture', 'user_id', 'teaser', 'created_at')
        ->with(['tags' => fn($tag) =>$tag->select('name', 'slug')]);
    }
}
