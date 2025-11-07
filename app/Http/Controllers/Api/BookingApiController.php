<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookingResource;
use App\Models\Booking;
use App\Models\Car;
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

    public function getUserBookings($userId)
    {
         $bookings = Booking::with(['car.brand', 'car.category'])->where('user_id', $userId)->latest()->get();

         return response([
            'success' => true,
            'message' => 'List of User Bookings',
            'data' => BookingResource::collection($bookings),
        ], 200);
    }

    public function store(Request $request)
    {
        $car = Car::find($request['car_id']);

        $request->validate([
            'car_id' => 'required|exists:cars,id',
            'user_id' => 'required|exists:users,id',
            'start_date' => ['required','date', 'after_or_equal:today', 'after_or_equal:'. now()],
            'end_date' => 'required|date|after_or_equal:start_date',
            'notes' => 'nullable|string',
        ]);
        $request->merge(['status' => 'pending']);

        try {
            $booking = Booking::create($request->all());
            return response()->json([
                'success' => true,
                'message' => 'Booking Created Successfully',
                'data' => $booking
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }

    public function update(Request $request, $id)
    {
        $booking = Booking::find($id);

        if ($booking) {
            $booking->update($request->only(['status', 'rated']));

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
