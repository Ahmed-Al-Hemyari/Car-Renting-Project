<?php

namespace App\Http\Resources;

use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CarResource extends JsonResource
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
            'name'  => $this->name,
            'price' => $this->price,
            'rate'  => $this->rate,
            'image' => $this->image ? url('storage/' . $this->image) : null, // full URL
            'brand' => [
                'id'   => $this->brand->id ?? null,
                'name' => $this->brand->name ?? null,
                // 'image' => $this->brand?->image ? url('storage/' . $this->brand->image) : null,
                // 'website_url' => $this->brand->website_url ?? null,
            ],
            'category' => [
                'id'   => $this->category->id ?? null,
                'name' => $this->category->name ?? null,
            ],
        ];
    }

}
