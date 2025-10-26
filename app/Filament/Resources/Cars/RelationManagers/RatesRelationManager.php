<?php

namespace App\Filament\Resources\Cars\RelationManagers;

use App\Filament\Resources\Cars\CarResource;
use App\Filament\Resources\Rates\RateResource;
use Filament\Actions\CreateAction;
use Filament\Resources\RelationManagers\RelationManager;
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
            ]);
    }
}
