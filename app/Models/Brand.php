<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Brand extends Model
{
    //
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'image',
        'website_url',
    ];
    public function cars()
    {
        return $this->hasMany(Car::class);
    }
}
