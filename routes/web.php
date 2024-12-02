<?php

use App\Http\Controllers;
use App\Http\Controllers\Article\ArticleCategoryController;
use App\Http\Controllers\Article\ArticleController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', Controllers\HomeController::class)->name('home');
Route::get('about', Controllers\AboutController::class)->name('about');

Route::get('article', ArticleController::class)->name('article');
Route::get('article/{article:slug}', [ArticleController::class, 'show'])->name('article.show');

Route::middleware('auth')->group(function () {
    Route::get('dashboard/article', [ArticleController::class, 'table'])->name('article.table');
    Route::get('dashboard/article/create', [ArticleController::class, 'create'])->name('article.create');
    Route::post('dashboard/article/create', [ArticleController::class, 'store'])->name('article.store');
    Route::get('dashboard/article/{article:slug}/edit', [ArticleController::class, 'edit'])->name('article.edit');
    Route::patch('dashboard/article/{article:slug}', [ArticleController::class, 'update'])->name('article.update');
    Route::delete('dashboard/article/{article:slug}', [ArticleController::class, 'destroy'])->name('article.destroy');
});
Route::get('article/category/{category:slug}',[ArticleCategoryController::class, 'show'])-> name('article.category');

Route::get('dashboard', Controllers\DashboardController::class)->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/dev.php';
