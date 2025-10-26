<?php

namespace App\Filament\Resources\Brands\RelationManagers;

use App\Filament\Resources\Cars\CarResource;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class CarsRelationManager extends RelationManager
{
    protected static string $relationship = 'cars';

    protected static ?string $relatedResource = CarResource::class;


    public function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('brand.name')->sortable()->searchable(),
                TextColumn::make('name')
                    ->searchable(),
                TextColumn::make('category.name')->sortable()->searchable(),
                TextColumn::make('price')
                    ->money('usd')
                    ->searchable(),
                TextColumn::make('rate')
                    ->numeric()
                    ->sortable(),
            ])
            ->headerActions([
                CreateAction::make(),
            ])
            ->actions([
                EditAction::make(),
                DeleteAction::make(),
            ]);
    }
}
