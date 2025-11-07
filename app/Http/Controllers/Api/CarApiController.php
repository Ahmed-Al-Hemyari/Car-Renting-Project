<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CarResource;
use App\Models\Car;
use Illuminate\Http\Request;

class CarApiController extends Controller
{
    //
    
    public function index(Request $request)
    {
        // Only keep relevant filter params
        $filters = $request->only(['search', 'brand', 'category', 'price', 'rate']);

        $cars = Car::with([
                'brand',
                'category',
                'rates' => fn($query) => $query->latest()->take(6),
            ])
            ->filter($filters)
            ->latest()
            ->paginate(10); // 👈 show 10 cars per page

        return response([
            'success' => true,
            'message' => 'List of Cars',
            'data' => CarResource::collection($cars),
            'meta' => [
                'current_page' => $cars->currentPage(),
                'last_page'    => $cars->lastPage(),
                'per_page'     => $cars->perPage(),
                'total'        => $cars->total(),
            ],
        ], 200);
    }



    public function show($id)
    {
        $car = Car::with(['brand', 'category'])->find($id);
        $unvailableDates = Car::unavailableDates($car->id);
        $car->unavailable_dates = $unvailableDates;

        if ($car) {
            return response([
                'success' => true,
                'message' => 'Car Details',
                'data' => new CarResource($car),
            ], 200);
        } else {
            return response([
                'success' => false,
                'message' => 'Car Not Found',
            ], 404);
        }
    }
}
