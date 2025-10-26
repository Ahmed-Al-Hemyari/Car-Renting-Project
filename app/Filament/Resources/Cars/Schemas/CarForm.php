<?php

namespace App\Filament\Resources\Cars\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\BelongsToSelect;
use Filament\Forms\Components\Select;
use Filament\Schemas\Schema;

class CarForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('brand_id')
                    ->relationship('brand', 'name')
                    ->required(),
                TextInput::make('name')
                    ->required(),
                Select::make('category_id')
                    ->relationship('category', 'name')
                    ->required(),
                TextInput::make('price')
                    ->numeric()
                    ->required()
                    ->prefix('$'),
                FileUpload::make('image')
                    ->directory('cars')
                    ->image(),
                // TextInput::make('rate')
                //     ->required()
                //     ->numeric()
                //     ->default(0.0),
            ]);
    }
}
