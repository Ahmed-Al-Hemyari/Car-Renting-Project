<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rate extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'user_id',
        'car_id',
        'booking_id',
        'rate',
        'comment',
    ];

    protected static function boot()
    {
        parent::boot();

        static::created(function ($rate) {
            $rate->booking->car->updateRate();
        });

        static::updated(function ($rate) {
            $rate->booking->car->updateRate();
        });
    }

    public function car()
    {
        return $this->belongsTo(Car::class);
    }
    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
