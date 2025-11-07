<?php

use App\Http\Controllers\Api\AuthApiController;
use App\Http\Controllers\Api\BookingApiController;
use App\Http\Controllers\Api\CarApiController;
use App\Http\Controllers\Api\RateApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('register', [AuthApiController::class, 'register']);
Route::post('login', [AuthApiController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthApiController::class, 'logout']);
    Route::get('user', [AuthApiController::class, 'user']);
    Route::put('users/update/{userId}', [AuthApiController::class, 'update']);

    Route::apiResource('bookings', BookingApiController::class);
    Route::get('bookings/user/{userId}', [BookingApiController::class, 'getUserBookings']);
    Route::post('rates', [RateApiController::class, 'store']);
    Route::get('rates/car/{carId}', [RateApiController::class, 'getCarRates']);
});
    Route::apiResource('cars', CarApiController::class);