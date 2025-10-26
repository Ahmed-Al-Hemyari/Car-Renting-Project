<?php

namespace App\Filament\Resources\Brands\Schemas;

use App\Models\Brand;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Components\ImageEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Divider;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\Layout\Split;

class BrandInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Brand Info')
                    ->columnSpanFull()
                    ->schema([
                        ImageEntry::make('image')
                            ->label('')
                            ->columnSpanFull()
                            ->height('100px')
                            ->hiddenLabel()
                            ->placeholder('-'),    
                        TextEntry::make('name'),
                        TextEntry::make('website_url'),
                    ]),
            ]);
    }
}
