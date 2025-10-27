<?php

namespace App\Filament\Resources\Users\Schemas;

use App\Models\User;
use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class UserInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('User Info')->schema([
                    ImageEntry::make('image')
                        ->label('')
                        ->columnSpanFull()
                        ->height('100px')
                        ->circular()
                        ->hiddenLabel()
                        ->placeholder('-'),
                    TextEntry::make('name'),
                    TextEntry::make('email')
                        ->label('Email address'),
                    IconEntry::make('admin')
                        ->boolean(),
                ])->columnSpanFull(),
            ]);
    }
}
