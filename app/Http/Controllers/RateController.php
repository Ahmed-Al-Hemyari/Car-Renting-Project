<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Car;
use App\Models\Rate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RateController extends Controller
{
    //
    public function create(Booking $booking)
    {
        return Inertia::render('Bookings/Rate', [
            'booking' => $booking
        ]);
    }

    public function store(Booking $booking, Request $request)
    {
        $formFields = $request->validate([
            'car_id' => 'required',
            'booking_id' => 'required',
            'rate' => 'required|integer|min:1',
            'comment' => ['nullable']
        ]);

        $formFields['user_id'] = Auth::id();

        Rate::create($formFields);
        $booking->rated = true;
        $booking->save();
        return redirect('/')->with('success', 'Thank you for rating');
    }
}
