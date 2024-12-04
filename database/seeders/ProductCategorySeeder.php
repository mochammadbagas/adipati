<?php

namespace Database\Seeders;

use App\Models\Product\ProductCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            ['name' => $name = 'Tenda Camping', 'slug' => str($name) ->slug()],
            ['name' => $name = 'Peralatan Tidur', 'slug' => str($name) ->slug()],
            ['name' => $name = 'Peralatan Penerangan', 'slug' => str($name) ->slug()],
            ['name' => $name = 'Peralatan Hiking', 'slug' => str($name) ->slug()],
            ['name' => $name = 'Peralatan Masak', 'slug' => str($name) ->slug()],
            ['name' => $name = 'Peralatan Pendukung', 'slug' => str($name) ->slug()],
        ])->each(fn($productCategory) => ProductCategory::create($productCategory));
    }
}
