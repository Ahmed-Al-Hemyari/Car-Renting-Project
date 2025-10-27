<?php

namespace App\Filament\Widgets;

use App\Models\Booking;
use App\Models\Car;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;

class StatsOverview extends StatsOverviewWidget
{
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        // Users trend
        $userData = Trend::model(User::class)
        ->between(start: now()->startOfMonth(), end: now()->endOfMonth())
        ->perDay()
        ->count();
        $userLatest = $userData->last()->aggregate ?? 0;
        $userPrevious = $userData->slice(-2, 1)->first()->aggregate ?? 0;
        $userGrowing = ($userLatest - $userPrevious) > 0;

        // Bookings trend
        $bookingData = Trend::model(Booking::class)
        ->between(start: now()->startOfMonth(), end: now()->endOfMonth())
        ->perDay()
        ->count();
        $bookingLatest = $bookingData->last()->aggregate ?? 0;
        $bookingPrevious = $bookingData->slice(-2, 1)->first()->aggregate ?? 0;
        $bookingGrowing = ($bookingLatest - $bookingPrevious) > 0;

        // Cars trend
        $carData = Trend::model(Car::class)
        ->between(start: now()->startOfMonth(), end: now()->endOfMonth())
        ->perDay()
        ->count();
        $carLatest = $carData->last()->aggregate ?? 0;
        $carPrevious = $carData->slice(-2, 1)->first()->aggregate ?? 0;
        $carGrowing = ($carLatest - $carPrevious) > 0;

        return [
        Stat::make('Users', User::query()->count())
            ->description('All users from the database')
            ->chart($userData->map(fn (TrendValue $value) => $value->aggregate))
            ->descriptionIcon($userGrowing ? 'heroicon-m-arrow-trending-up' : 'heroicon-m-arrow-trending-down')
            ->color($userGrowing ? 'success' : 'danger'),

        Stat::make('Bookings', Booking::query()->count())
            ->description('All bookings from the database')
            ->chart($bookingData->map(fn (TrendValue $value) => $value->aggregate))
            ->descriptionIcon($bookingGrowing ? 'heroicon-m-arrow-trending-up' : 'heroicon-m-arrow-trending-down')
            ->color($bookingGrowing ? 'success' : 'danger'),

        Stat::make('Cars', Car::query()->count())
            ->description('All cars from the database')
            ->chart($carData->map(fn (TrendValue $value) => $value->aggregate))
            ->descriptionIcon($carGrowing ? 'heroicon-m-arrow-trending-up' : 'heroicon-m-arrow-trending-down')
            ->color($carGrowing ? 'success' : 'danger'),
        ];

    }
}
