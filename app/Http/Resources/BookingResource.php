<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'    => $this->id,
            'start_date'  => $this->start_date,
            'end_date' => $this->end_date,
            'total_price'  => $this->total_price,
            'notes'  => $this->notes,
            'status'  => $this->status,
            'rated'  => $this->rated,
            
            'car' => [
                'id'   => $this->car->id ?? null,
                'image' => $this->car && $this->car->image 
                    ? url('storage/' . $this->car->image)
                    : null,
                'name' => $this->car->name ?? null,
                'brand' => [
                    'id'   => $this->car->brand->id ?? null,
                    'name' => $this->car->brand->name ?? null,
                ],
                'category' => [
                    'id'   => $this->car->category->id ?? null,
                    'name' => $this->car->category->name ?? null,
                ],
            ],
        ];
    }
}
