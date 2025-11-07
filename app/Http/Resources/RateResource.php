<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            // 'id' => $this->id,
            // 'user_id' => $this->user_id,
            // 'car_id' => $this->car_id,
            'rate' => $this->rate,
            'comment' => $this->comment,
            'user' => $this->user ? new UserResource($this->user) : null,
        ];
    }
}
