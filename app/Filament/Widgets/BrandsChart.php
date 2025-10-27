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
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF',
                        '#FF9F40',
                        '#FF6384',
                        '#C9CBCF',
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
