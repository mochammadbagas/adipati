<?php

namespace App\Models\Article;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function category() 
    {
        return $this->belongsTo(ArticleCategory::class, 'articleCategory_id')->select('name', 'slug');
    }

    public function tags()
    {
        return $this->belongsToMany(ArticleTag::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id')->select('id', 'name');
    }
}
