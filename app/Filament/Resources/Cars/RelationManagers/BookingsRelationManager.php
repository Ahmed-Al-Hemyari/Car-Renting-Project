<?php

namespace App\Filament\Resources\Cars\RelationManagers;

use App\Filament\Resources\Bookings\BookingResource;
use App\Filament\Resources\Cars\CarResource;
use Filament\Actions\Action;
use Filament\Actions\CreateAction;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Support\Enums\Size;
use Filament\Tables\Table;

class BookingsRelationManager extends RelationManager
{
    protected static string $relationship = 'bookings';

    protected static ?string $relatedResource = BookingResource::class;

    public function table(Table $table): Table
    {
        return $table
            ->headerActions([
                Action::make('create')
                    ->label('Create')
                    // ->icon('heroicon-o-plus')
                    ->size(Size::Large)
                    ->url(BookingResource::getUrl('create'))
                    ->color('primary')
            ]);
    }
}
