<?php

namespace App\Filament\Resources\Cars\Schemas;

use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class CarInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('name'),
                TextEntry::make('price'),
                ImageEntry::make('image')
                    ->placeholder('-'),
                TextEntry::make('rate')
                    ->numeric(),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('brand_id')
                    ->numeric(),
                TextEntry::make('category_id')
                    ->numeric(),
            ]);
    }
}
