<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CarResource;
use App\Models\Car;
use Illuminate\Http\Request;

class CarApiController extends Controller
{
    //
    
    public function index()
    {
       $cars = Car::with(['brand', 'category'])->latest()->get();
        
        return response([
            'success' => true,
            'message' => 'List of All Cars',
            'data' => CarResource::collection($cars),
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
