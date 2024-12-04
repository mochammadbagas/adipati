<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductGallery extends Model
{
    use HasFactory;
    protected $guarded = [];

    protected $fillable = 
    [
        'product_id', 'url'
    ];

    public function gallery()
    {
        return $this->belongsTo(Product::class);
    }
}
