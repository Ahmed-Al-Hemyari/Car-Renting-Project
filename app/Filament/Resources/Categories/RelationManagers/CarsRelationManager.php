<?php

namespace App\Filament\Resources\Categories\RelationManagers;

use App\Filament\Resources\Cars\CarResource;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;

class CarsRelationManager extends RelationManager
{
    protected static string $relationship = 'cars';

    protected static ?string $relatedResource = CarResource::class;


    public static function configureTable(Table $table): void
    {
        $table
            ->columns([
                TextColumn::make('name')->sortable()->searchable(),
                TextColumn::make('brand.name')->sortable()->searchable(),
            ]);
    }
}
