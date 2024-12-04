<?php

namespace App\Console\Commands;

use App\Models\Article\Article;
use App\Models\Product\Product;
use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SitemapGenerator extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:sitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $sitemap = Sitemap::create('https://mochammadbagas.site/')
        ->add(Url::create('/'))
        ->add(Url::create('/product'))
        ->add(Url::create('/article'));

        Article::all()->each(function (Article $article) use ($sitemap) {
            $sitemap->add(Url::create("/article/{$article->slug}"));
        });
        Product::all()->each(function (Product $product) use ($sitemap) {
            $sitemap->add(Url::create("/product/{$product->slug}"));
        });
        
        $sitemap->writeToFile(public_path('sitemap.xml'));
        $this->info('The sitemap has been generated');
    }

}
