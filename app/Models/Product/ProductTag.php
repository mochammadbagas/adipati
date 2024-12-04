<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductTag extends Model
{
    use HasFactory;

    public function product()
    {
        return $this->belongsToMany(Product::class)
        ->select('id', 'title', 'slug', 'picture', 'user_id', 'description', 'created_at')
        ->with(['tags' => fn($tag) =>$tag->select('name', 'slug')]);
    }
}
