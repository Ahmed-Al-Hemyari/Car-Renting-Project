<?php

namespace App\Filament\Resources\Categories\RelationManagers;

use App\Filament\Resources\Cars\CarResource;
use App\Filament\Resources\Categories\CategoryResource;
use Filament\Actions\Action;
use Filament\Actions\CreateAction;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Support\Enums\Size;
use Filament\Tables\Table;

class CarsRelationManager extends RelationManager
{
    protected static string $relationship = 'cars';

    protected static ?string $relatedResource = CategoryResource::class;

    public function table(Table $table): Table
    {
        return $table
            ->headerActions([
                Action::make('create')
                ->label('Create')
                // ->icon('heroicon-o-plus')
                ->size(Size::Large)
                ->url(CarResource::getUrl('create'))
                ->color('primary')
            ]);
    }
}
