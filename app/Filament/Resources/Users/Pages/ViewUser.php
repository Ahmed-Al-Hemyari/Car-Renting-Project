<?php

namespace App\Filament\Resources\Users\Pages;

use App\Filament\Resources\Users\UserResource;
use Filament\Actions\EditAction;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Pages\ViewRecord;

class ViewUser extends ViewRecord
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }

    // protected function getFromSchema(): Array
    // {
    //     return [
    //         TextInput::make('name')
    //             ->disabled(),
    //         TextInput::make('email')
    //             ->disabled(),
    //         // Boolean::make('admin')
    //         //     ->disabled(),
    //     ];
    // }
}
