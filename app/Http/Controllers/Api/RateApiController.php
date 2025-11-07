<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RateResource;
use App\Models\Booking;
use App\Models\Rate;
use Illuminate\Http\Request;

class RateApiController extends Controller
{
    //
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'car_id' => 'required|exists:cars,id',
            'booking_id' => 'required|exists:bookings,id',
            'rate' => 'required|min:1|max:5',
            'comment' => 'nullable|string',
        ]);

        $rate = Rate::create($validated);
        $booking = Booking::find($validated['booking_id']);
        $booking->rated = true;
        $booking->save();

        return response()->json([
            'message' => 'Rating submitted successfully',
            'success' => true,
        ], 201);
    }

    public function getCarRates($carId)
    {
        $rates = Rate::with('user')->where('car_id', $carId)->get();

        return response()->json(RateResource::collection($rates), 200);
    }

}
