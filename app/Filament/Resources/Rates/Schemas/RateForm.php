<?php

namespace App\Filament\Resources\Rates\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class RateForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),
                Select::make('booking_id')
                    ->relationship('booking', 'id')
                    ->required(),
                Select::make('car_id')
                    ->relationship('car', 'name')
                    ->required(),
                TextInput::make('rate')
                    ->required()
                    ->numeric(),
                Textarea::make('comment')
                    ->default(null)
                    ->columnSpanFull(),
            ]);
    }
}
