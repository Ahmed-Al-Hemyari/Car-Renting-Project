<?php

namespace App\Filament\Widgets;

use App\Models\Brand;
use Filament\Widgets\ChartWidget;

class BrandsChart extends ChartWidget
{
    protected ?string $heading = 'Cars per Brand';

    protected function getData(): array
    {
        $brands = Brand::withCount('cars')->get();

        return [
            'datasets' => [
                [
                    'label' => 'Cars per brand',
                    'data' => $brands->pluck('cars_count'),
                    'backgroundColor' => [
                        '#941B1D',
                        '#5A0F2C',
                        '#12355B',
                        '#1B5F8C',
                        '#2E8B8C',
                        '#3B3F58',
                        '#7D1E2D',
                        '#A13D63',
                    ],
                ],
            ],
            'labels' => $brands->pluck('name'),
        ];
    }

    protected function getType(): string
    {
        return 'pie';
    }
}
