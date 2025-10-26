<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\RateController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Pages
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// Cars
Route::get('/cars', [CarController::class, 'index'])->name('cars.index');
Route::get('/cars/{car}', [CarController::class, 'show'])->name('cars.show');

Route::middleware('auth')->group(function () {

    // Bookings
    Route::get('/bookings/add/{car}', [BookingController::class, 'create'])->name('bookings.create');
    Route::post('/bookings/add/{car}', [BookingController::class, 'store'])->name('bookings.store');
    Route::post('/bookings/cancel/{booking}', [BookingController::class, 'cancel'])->name('bookings.cancel');
    Route::delete('/bookings/delete/{booking}', [BookingController::class, 'delete'])->name('bookings.delete');

    // Rate
    Route::get('/rates/{booking}', [RateController::class, 'create'])->name('bookings.create');
    Route::post('/rates/{booking}', [RateController::class, 'store'])->name('bookings.store');

});

// Route::get('dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
