<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
        'rate',
        'price',
        'brand_id',
        'category_id',
        'unavailable_dates',
    ];

    protected $casts = [
        'unavailable_dates' => 'array',
    ];


    protected static function boot()
    {
        parent::boot();

        static::saved(function ($car) {
            $car->updateRate();
        });
    }

    public function updateUnavailableDates()
    {
        // Get all bookings for this car
        $bookings = $this->bookings()->whereIn('status',['pending', 'confirmed', 'active'])->get(['start_date', 'end_date']);
        $dates = [];

        foreach ($bookings as $booking) {
            $period = new \DatePeriod(
                new \DateTime($booking->start_date),
                new \DateInterval('P1D'),
                (new \DateTime($booking->end_date))->modify('+1 day')
            );

            foreach ($period as $date) {
                $dates[] = $date->format('Y-m-d');
            }
        }

        // Remove duplicates and reset indexes
        $this->unavailable_dates = array_values(array_unique($dates));

        $this->saveQuietly();
    }

    public function updateRate()
    {
        $average = $this->rates()->avg('rate');
        $this->rate = round($average, 1);
        $this->saveQuietly();
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
    
    public function rates()
    {
        return $this->hasManyThrough(Rate::class, Booking::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($q, $search) {
            $q->where(function ($q) use ($search) {
                $q->whereHas('brand', fn($q2) => $q2->where('name', 'like', "%$search%"))
                ->orWhereHas('category', fn($q2) => $q2->where('name', 'like', "%$search%"))
                ->orWhere('name', 'like', "%$search%");
            });
        });

        $query->when($filters['brand'] ?? null, function ($q, $brand) {
            $q->whereHas('brand', fn($q2) => $q2->where('name', 'like', "%$brand%"));
        });

        $query->when($filters['category'] ?? null, function ($q, $category) {
            $q->whereHas('category', fn($q2) => $q2->where('name', 'like', "%$category%"));
        });

        $query->when($filters['price'] ?? null, function ($q, $price) {
            if (preg_match('/(\d+)-(\d+)/', $price, $m)) {
                $q->whereBetween('price', [$m[1], $m[2]]);
            } elseif (str_ends_with($price, '+')) {
                $min = (int) rtrim($price, '+');
                $q->where('price', '>=', $min);
            }
        });

        $query->when($filters['rate'] ?? null, function ($q, $rate) {
            if (preg_match('/(\d+(\.\d+)?)-(\d+(\.\d+)?)/', $rate, $m)) {
                $q->whereBetween('rate', [$m[1], $m[3]]);
            } elseif (str_ends_with($rate, '+')) {
                $min = (float) rtrim($rate, '+');
                $q->where('rate', '>=', $min);
            }
        });
    }
}
