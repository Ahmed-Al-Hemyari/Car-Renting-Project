<?php

namespace App\Filament\Resources\Users\RelationManagers;

use App\Filament\Resources\Rates\RateResource;
use App\Filament\Resources\Users\UserResource;
use Filament\Actions\CreateAction;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class RatesRelationManager extends RelationManager
{
    protected static string $relationship = 'rates';

    // protected static ?string $relatedResource = RateResource::class;

    public function table(Table $table): Table
    {
        return $table
            ->headerActions([
                CreateAction::make(),
            ])
            ->columns([
            TextColumn::make('user.name')->sortable()->searchable(),
            TextColumn::make('rate')
                ->label('Rate')->sortable(),
            TextColumn::make('comment')
                ->label('Comment')->searchable(),
            ]);
    }
}
