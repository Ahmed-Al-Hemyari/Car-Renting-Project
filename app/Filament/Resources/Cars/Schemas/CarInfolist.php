<?php

namespace App\Filament\Resources\Cars\Schemas;

use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;

class CarInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Car Info')
                    ->schema([
                        ImageEntry::make('image')
                            ->label('')
                            ->extraAttributes([
                                'class' => 'rounded-xl shadow-lg w-full mb-4 object-cover aspect-[16/9]',
                            ]),
                        Grid::make(2)
                            ->schema([
                                TextEntry::make('brand.name')->label('Brand')->weight('bold'),
                                TextEntry::make('name')->label('Model'),
                                TextEntry::make('category.name')->label('Category'),
                                TextEntry::make('price')->label('Price')->prefix('$'),
                                TextEntry::make('rate')->label('Rating')->suffix('★')->color('warning'),
                            ]),
                    ]),

            ]);
    }
}
