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
            'labels' => $categories->pluck('name'),
        ];
    }

    protected function getType(): string
    {
        return 'pie';
    }
}
