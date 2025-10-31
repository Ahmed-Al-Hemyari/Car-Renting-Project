<?php

namespace App\Filament\Resources\Users\Tables;

use Filament\Actions\Action;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Actions\ViewAction;
use Illuminate\Database\Eloquent\Builder;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Table;
use Illuminate\Support\Collection;

class UsersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')    
                    ->label('Photo')
                    ->circular()
                    ->size(50)
                    ->defaultImageUrl(url('/images/no-image-user.webp')),
                TextColumn::make('name')
                    ->searchable(),
                TextColumn::make('email')
                    ->label('Email address')
                    ->searchable(),
                IconColumn::make('admin')
                    ->boolean(),
            ])
            ->filters([
                Filter::make('Admin')
                    ->query(fn (Builder $query): Builder => $query->where('admin', true)),
            ])
            ->recordActions([
                ViewAction::make()->label(''),
                Action::make('make_admin')
                    ->label('')
                    ->icon('heroicon-o-shield-check')
                    ->color('success')
                    ->requiresConfirmation()
                    ->visible(fn ($record) => !$record->admin)
                    ->action(fn ($record) => $record->update(['admin' => true])),
                Action::make('revoke_admin')
                    ->label('')
                    ->icon('heroicon-o-shield-exclamation')
                    ->color('danger')
                    ->requiresConfirmation()
                    ->visible(fn ($record) => $record->admin)
                    ->action(fn ($record) => $record->update(['admin' => false])),
                EditAction::make()->label(''),
                DeleteAction::make()->label(''),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    BulkAction::make('make_admin')
                        ->label('Make Admin')
                        ->icon('heroicon-o-shield-check')
                        ->color('success')
                        ->requiresConfirmation()
                        ->action(fn (Collection $records) => $records->where('admin', false)->each->update(['admin' => true])),
                    BulkAction::make('revoke_admin')
                        ->label('Revoke Admin')
                        ->icon('heroicon-o-shield-exclamation')
                        ->color('danger')
                        ->requiresConfirmation()
                        ->action(fn (Collection $records) => $records->where('admin', true)->each->update(['admin' => false])),
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
