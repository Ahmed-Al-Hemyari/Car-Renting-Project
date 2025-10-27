<?php

namespace App\Filament\Resources\Bookings\Schemas;

use App\Models\Booking;
use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class BookingInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Booking Info')
                    ->schema([
                        ImageEntry::make('car.image')
                            ->label('')
                            ->extraAttributes([
                                'class' => 'rounded-xl shadow-lg w-full mb-4 object-cover aspect-[16/9]',
                            ]),
                        Grid::make(2)
                            ->schema([
                                TextEntry::make('car.brand.name')->label('Brand')->weight('bold'),
                                TextEntry::make('car.name')->label('Model'),
                                TextEntry::make('start_date')
                                    ->date(),
                                TextEntry::make('end_date')
                                    ->date(),
                                TextEntry::make('total_price')
                                    ->numeric(),
                                TextEntry::make('notes')
                                    ->placeholder('-')
                                    ->columnSpanFull(),
                                TextEntry::make('status')
                                    ->badge(),
                            ]),
                    ])->columnSpanFull(),
            ]);
    }
}
