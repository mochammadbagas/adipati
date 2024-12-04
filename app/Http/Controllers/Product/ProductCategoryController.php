<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Resources\Product\ProductItemResource;
use App\Models\Product\Product;
use App\Models\Product\ProductCategory;
use Illuminate\Http\Request;

class ProductCategoryController extends Controller
{
    public function show(ProductCategory $category)
    {
        $product = Product::query()
        ->where('productCategory_id', $category->id)
        ->select('title', 'slug', 'user_id', 'picture', 'description', 'price', 'id')
        ->with(['tags' => fn($tag) =>$tag->select('name', 'slug')])
        ->latest()
        ->fastPaginate(12);
        
        return inertia('product/category', [
            'category' => $category,
            'data' => ProductItemResource::collection($product),
        ]);
    }
}
