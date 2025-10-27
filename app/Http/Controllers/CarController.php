<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Car;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CarController extends Controller
{
    //
    // public function availability(Car $car)
    // {
    //     return response()->json($car->unavailableDates());
    // }

    public function index(Request $request)
    {
        $filters = $request->only(['search', 'brand', 'category', 'price', 'rate']);

        $cars = Car::with(['brand', 'category'])
            ->filter($filters)
            ->paginate(12)
            ->withQueryString();
    
        $brands = Brand::orderBy('name')->get(['id', 'name']);
    
        return inertia('Cars/Index', [
            'cars' => $cars,
            'brands' => $brands,
            'filters' => $filters,
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
