<?php

namespace App\Filament\Widgets;

use App\Models\Booking;
use Filament\Actions\Action;
use Filament\Actions\BulkActionGroup;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;

class LatestBookings extends TableWidget
{
    // protected int | string | array $columnSpan = 'full';

    protected static ?int $sort = 4;

    public function table(Table $table): Table
    {
        return $table
            ->query(fn (): Builder => Booking::query())
            ->columns([
                TextColumn::make('user.name')->sortable()->searchable(),
                TextColumn::make('car.brand.name')->sortable()->searchable(),
                TextColumn::make('car.name')->sortable()->searchable(),
                TextColumn::make('total_price')
                    ->numeric()
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Action::make('go_to_bookings')
                    ->label('Go To Bookings')
                    ->url('/admin/bookings')
            ])
            ->recordActions([
                //
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    //
                ]),
            ]);
    }
}
