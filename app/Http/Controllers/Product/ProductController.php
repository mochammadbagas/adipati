<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ProductRequest as ProductProductRequest;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\Product\ProductItemResource;
use App\Http\Resources\Product\ProductSingleResource;
use App\Http\Resources\Product\ProductTableResource;
use App\Models\Product\Product;
use App\Models\Product\ProductTag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public $productTags;

    public function __construct()
    {   
        $this->productTags = ProductTag::select('id', 'name')->get();
    }

    public function __invoke(Request $request)
    {
        {
            $product = Product::query()
            ->select('title', 'slug', 'picture', 'user_id', 'description', 'price', 'created_at', 'id')
            ->with(['tags' => fn($tag) =>$tag->select('name', 'slug')])
            ->latest()
            ->fastPaginate(12);
    
            return inertia('product/home', [
                'title' => 'Product', 
                'data' => ProductTableResource::collection($product)
            ]);
        }
    }

    public function create()
    {
        return inertia('product/dashboard/create', [
            'productTags' => $this->productTags,
        ]);
    }

    public function store(ProductProductRequest $request)
    {
        $picture = $request->file('picture');
        $product = $request->user()->product()->create([
            'title' => $title = $request->title,
            'slug' => $slug = str($title)->slug(),
            'productCategory_id' => $request->productCategory_id,
            'description' => $request->description,
            'price' => $request->price,
            'picture' => $request->hasFile('picture') ? $picture->storeAs('public', $slug .'.'. $picture->extension()) : null,

        ]);

        $product->tags()->attach($request->product_tags);

        return to_route('home');
    }

    public function edit(Product $product)
    {
        return inertia('product/dashboard/edit', [
            'product' => $product->load([
                'tags' => fn ($query) => $query->select('name', 'slug', 'id'),
                'category' => fn ($query) => $query->select('name', 'slug', 'id')
                ]),
            'productTags' => $this->productTags,
        ]);
    }

    public function update(ProductProductRequest $request, Product $product)
    {
        $picture = $request->file('picture');
        $product->update([
            'title' => $title = $request->title,
            'slug' => $slug = str($title)->slug(),
            'productCategory_id' => $request->productCategory_id,
            'description' => $request->description,
            'price' => $request->price,
            'picture' => $request->hasFile('picture') ? $picture->storeAs('public', $slug .'.'. $picture->extension()) : null,
        ]);

        $product->tags()->sync($request->product_tags);

        return to_route('home');
    }

    public function show(Product $product)
    { 
        $products = Product::query()
        ->select('title', 'slug', 'picture', 'user_id', 'description', 'price', 'id')
        ->with(['tags' => fn($tag) =>$tag->select('name', 'slug')])
        ->whereNot('id', $product->id)
        ->where('productCategory_id', $product->productCategory_id)
        ->latest()
        ->limit(3)
        ->get();
        $product->load([
            'tags' => fn ($query) => $query->select('name', 'slug'),
            'category' => fn ($query) => $query->select('id','name', 'slug'),
        ]);
        return inertia('product/show', [
            'product' => (new ProductSingleResource($product))->additional([
                'related' => (ProductItemResource::collection($products))
            ]),
        ]);
    }

    public function table()
    {
        $products = Product::query()
            ->with([
                'author',
                'tags' => fn ($query) => $query->select('name', 'slug', 'id'),
                'category' => fn ($query) => $query->select('name', 'slug', 'id'),
            ])
            ->latest()
            ->fastPaginate(20);

        return inertia('product/dashboard/home',[
            'products' => ProductTableResource::collection($products),
        ]);
    }

    public function destroy(Product $product)
    {
        if ($product->picture) {
            Storage::delete($product->picture);
        }
        $product->tags()->detach();
        $product->delete();
        return back();
    }
}
