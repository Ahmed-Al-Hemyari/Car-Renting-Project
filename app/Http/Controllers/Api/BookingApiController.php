<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookingResource;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingApiController extends Controller
{
    public function index()
    {
         $bookings = Booking::with(['car.brand', 'car.category'])->latest()->get();

         return response([
            'success' => true,
            'message' => 'List of All Bookings',
            'data' => BookingResource::collection($bookings),
        ], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'car_id' => 'required|exists:cars,id',
            'user_id' => 'required|exists:users,id',
            'start_date' => ['required','date', 'after_or_equal:today'],
            'end_date' => 'required|date|after_or_equal:start_date',
            'notes' => 'nullable|string',
        ]);
        $request->merge(['status' => 'pending']);

        $booking = Booking::create($request->all());

        return response([
            'success' => true,
            'message' => 'Booking Created Successfully',
            'data' => new BookingResource($booking),
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $booking = Booking::find($id);

        if ($booking) {
            $booking->update($request->only(['status']));

            return response([
                'success' => true,
                'message' => 'Booking Updated Successfully',
                'data' => new BookingResource($booking),
            ], 200);
        } else {
            return response([
                'success' => false,
                'message' => 'Booking Not Found',
            ], 404);
        }
    }
}
