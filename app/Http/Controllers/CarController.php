<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CarController extends Controller
{
    //
    public function availability(Car $car)
    {
        return response()->json($car->unavailableDates());
    }

    public function index()
    {
        $filters = request()->only(['brand', 'category', 'availability', 'price', 'rate', 'search']);
        // return Car::latest()->filter($filters)->get();
        return Inertia::render('Cars/CarsView', [
            'cars' => Car::with(['brand', 'category'])->latest()->filter($filters)->get()
        ]);
    }

    public function show(Car $car)
    {
        $car->load(['brand', 'category', 'bookings', 'rates.user']);

        return Inertia::render('Cars/CarShow', [
            'car' => $car,
            'unavailableDates' => $car->unavailableDates(),
        ]);
    }
}
