<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Car;
use Inertia\Inertia;
use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    // //
    // public function index()
    // {
    //     $user = Auth::user();
    //     $bookings = Booking::with('car')->where('user_id', $user->id)->latest()->get();

    //     return Inertia::render('Users/Profile', [
    //         'bookings' => $bookings,
    //     ]);
    // }

    public function create(Car $car)
    {
        return Inertia::render('Bookings/CreateBooking', [
            'car' => $car->load(['brand', 'category'])
        ]);
    }

    public function store(Request $request, Car $car)
    {
        $formFields = $request->validate([
            'start_date' => ['required', 'date', 'after:' . now()],
            'end_date'   => ['required', 'date', 'after:start_date'],
            'total_price' => ['required', 'numeric'],
            'notes' => 'nullable|string',
        ]);

        $formFields['user_id'] = Auth::id();
        $formFields['car_id'] = $car->id;

        // Get current bookings that are still active
        $currentBookings = Booking::where('car_id', $car->id)
            ->whereIn('status', ['pending', 'confirmed'])
            ->get();

        $hasConflict = false;

        foreach ($currentBookings as $booking) {
            if (
                $formFields['start_date'] <= $booking->end_date &&
                $formFields['end_date'] >= $booking->start_date
            ) {
                $hasConflict = true;
                break;
            }
        }

        if ($hasConflict) {
            return redirect('/')->with('error', 'Car not available in that period.');
        }

        Booking::create($formFields);

        return redirect('/')
            ->with('success', 'Request submitted successfully!');
    }

    
    public function cancel(Booking $booking){

        if(!in_array($booking->status, ['pending', 'confirmed'])){
            return back()->with('error', 'This booking cannot be cancelled');
        }

        $booking -> update(['status' => 'cancelled']);
        return back()->with('success', 'Booking cancelled successfully!');
    } 

    public function delete(Booking $booking){
        $booking -> delete();
        return back()->with('success', 'Booking deleted successfully!');
    }   
}
