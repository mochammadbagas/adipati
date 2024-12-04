<?php

namespace Database\Seeders;

use App\Models\Product\ProductTag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            ['name' => $name = 'Sewa', 'slug' => str($name) ->slug()],
            ['name' => $name = 'Beli', 'slug' => str($name) ->slug()],
        ])->each(fn($productTag) => ProductTag::create($productTag));
    }
}
