<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{

    //
    use HasFactory;

    protected static function booted()
    {
        static::creating(function ($booking) {
            // Check car availability BEFORE saving
            $unavailable_dates = $booking->car->unavailable_dates ?? [];
            $start = new \DateTime($booking->start_date);
            $end = (new \DateTime($booking->end_date))->modify('+1 day');
            $wanted_dates = new \DatePeriod($start, new \DateInterval('P1D'), $end);

            foreach ($wanted_dates as $date) {
                $dateStr = $date->format('Y-m-d');
                if (in_array($dateStr, $unavailable_dates)) {
                    throw new \Exception("The car is not available on {$dateStr}");
                }
            }
        });

        static::saving(function ($booking) {
            // Calculate total price before saving
            if ($booking->car && $booking->start_date && $booking->end_date) {
                $days = $booking->start_date->diffInDays($booking->end_date);
                $booking->total_price = ($booking->car->price ?? 0) * $days;
            } else {
                $booking->total_price = 0;
            }
        });

        static::created(function ($booking) {
            // Update unavailable dates AFTER successful creation
            $booking->car->updateUnavailableDates();
        });

        static::updated(function ($booking) {
            $booking->car->updateUnavailableDates();
        });

        static::deleted(function ($booking) {
            $booking->car->updateUnavailableDates();
        });
    }



    protected $fillable = [
        'car_id',
        'user_id',
        'start_date',
        'end_date',
        'total_price',
        'status',
        'notes',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date'   => 'date',
    ];

    public function car()
    {
        return $this->belongsTo(Car::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function rate()
    {
        return $this->hasMany(Rate::class);
    }

    // public function calculateTotalPrice($carId, $startDate, $endDate)
    // {
    //     $car = Car::find($carId);
    //     if (!$car) {
    //         return 0;
    //     }

    //     $start = \Carbon\Carbon::parse($startDate);
    //     $end = \Carbon\Carbon::parse($endDate);
    //     $days = $start->diffInDays($end);

    //     return $car->price * $days;
    // }
}

