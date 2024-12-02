<?php

namespace Database\Seeders;

use App\Models\Article\ArticleTag;
use Illuminate\Database\Seeder;

class ArticleTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            ['name' => $name = 'HTML5', 'slug' => str($name) ->slug()],
            ['name' => $name = 'CSS', 'slug' => str($name) ->slug()],
            ['name' => $name = 'JavaScript', 'slug' => str($name) ->slug()],
            ['name' => $name = 'TypeScript', 'slug' => str($name) ->slug()],
            ['name' => $name = 'PHP', 'slug' => str($name) ->slug()],
            ['name' => $name = 'Laravel', 'slug' => str($name) ->slug()],
            ['name' => $name = 'Blade', 'slug' => str($name) ->slug()],
            ['name' => $name = 'React', 'slug' => str($name) ->slug()],
            ['name' => $name = 'Inertia Js', 'slug' => str($name) ->slug()],
        ])->each(fn($articleCategory) => ArticleTag::create($articleCategory));
    }
}
