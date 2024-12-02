<?php

namespace Database\Seeders;

use App\Models\Article\ArticleCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            ['name' => $name = 'Story', 'slug' => str($name) ->slug()],
            ['name' => $name = 'Tutorial', 'slug' => str($name) ->slug()],
        ])->each(fn($articleCategory) => ArticleCategory::create($articleCategory));
    }
}
