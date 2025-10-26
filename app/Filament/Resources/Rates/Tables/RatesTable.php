<?php

namespace App\Filament\Resources\Rates\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class RatesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('rate')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('user.name')->sortable()->searchable(),
                TextColumn::make('car.name')->sortable()->searchable(),
                TextColumn::make('booking.name')->sortable()->searchable(),
                TextColumn::make('comment'),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
