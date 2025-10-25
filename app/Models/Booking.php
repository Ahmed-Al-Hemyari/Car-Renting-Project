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
        static::saving(function ($booking) {
            if ($booking->car && $booking->start_date && $booking->end_date) {
                $days = $booking->start_date->diffInDays($booking->end_date);
                $booking->total_price = ($booking->car->price ?? 0) * $days;
            } else {
                $booking->total_price = 0;
            }
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
}

