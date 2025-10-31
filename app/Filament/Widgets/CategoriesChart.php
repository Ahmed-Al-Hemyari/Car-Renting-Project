<?php

namespace App\Filament\Widgets;

use App\Models\Category;
use Filament\Widgets\ChartWidget;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;

class CategoriesChart extends ChartWidget
{
    protected ?string $heading = 'Cars per Category';

    protected function getData(): array
    {
        $categories = Category::withCount('cars')->get();

        return [
            'datasets' => [
                [
                    'label' => 'Cars per Category',
                    'data' => $categories->pluck('cars_count'),
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
            'labels' => $categories->pluck('name'),
        ];
    }

    protected function getType(): string
    {
        return 'pie';
    }
}
