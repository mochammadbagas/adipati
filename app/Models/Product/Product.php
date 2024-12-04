<?php

namespace App\Models\Product;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function category() 
    {
        return $this->belongsTo(ProductCategory::class, 'productCategory_id')->select('name', 'slug');
    }

    public function tags()
    {
        return $this->belongsToMany(ProductTag::class);
    }

    public function galleries()
    {
        return $this->hasMany(ProductGallery::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id')->select('id', 'name');
    }
}
