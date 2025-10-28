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
}
