<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Car extends Model
{
    //
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'image',
        'rate',
        'price',
        'brand_id',
        'category_id',
    ];

    protected static function boot()
    {
        parent::boot();

        static::saved(function ($car) {
            $car->updateRate();
        });
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
        if (!empty($filters['search'])) {
            $query->where(function($q) use ($filters) {
                $q->whereHas('brand', function($q2) use ($filters) {
                    $q2->where('name', 'like', '%' . $filters['search'] . '%');
                })
                ->orWhereHas('category', function($q2) use ($filters) {
                    $q2->where('name', 'like', '%' . $filters['search'] . '%');
                })
                ->orWhere('name', 'like', '%' . $filters['search'] . '%');
            });
        }

        if (!empty($filters['brand'])) {
            $query->whereHas('brand', function ($q) use ($filters) {
                $q->where('name', 'like', '%' . $filters['brand'] . '%');
            });
        }

        if (!empty($filters['category'])) {
            $query->whereHas('category', function ($q) use ($filters) {
                $q->where('name', 'like', '%' . $filters['category'] . '%');
            });
        }

        if (!empty($filters['availability'])) {
            if ($filters['availability'] == 'available') {
                $query->where('availability_date', '<', now());
            } else {
                $query->where('availability_date', '>=', now());
            }
        }


        if (!empty($filters['price'])) {
            switch ($filters['price']) {
                case '0.0':
                    $query->whereBetween('price', [0, 35]);
                    break;
                case '35':
                    $query->whereBetween('price', [35, 45]);
                    break;
                case '45':
                    $query->whereBetween('price', [45, 55]);
                    break;
                case '55':
                    $query->where('price', '>', 55);
                    break;
            }
        }

        if (!empty($filters['rate'])) {
            switch ($filters['rate']) {
                case '2.0':
                    $query->whereBetween('rate', [1.0, 2.0]);
                    break;
                case '3.0':
                    $query->whereBetween('rate', [2.0, 3.0]);
                    break;
                case '4.0':
                    $query->whereBetween('rate', [3.0, 4.0]);
                    break;
                case '4.5':
                    $query->whereBetween('rate', [4.0, 4.5]);
                    break;
                case '5.0':
                    $query->where('rate', '>', 4.5);
                    break;
            }
        }
    }

    public function unavailableDates()
    {
        return $this->bookings
            ->whereIn('status', ['pending', 'confirmed', 'active'])
            ->flatMap(function ($booking) {
                $period = new \DatePeriod(
                    new \DateTime($booking->start_date),
                    new \DateInterval('P1D'),
                    (new \DateTime($booking->end_date))->modify('+1 day') // include end date
                );

                return collect(iterator_to_array($period))
                    ->map(fn($date) => $date->format('Y-m-d'));
            })
            ->unique()
            ->values();

    }
}
