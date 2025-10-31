<?php

namespace App\Filament\Resources\Bookings\Tables;

use App\Models\Booking;
use App\Models\Brand;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Actions\ViewAction;
use Filament\Forms\Components\Builder;
use Filament\Support\Colors\Color;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Table;
use Illuminate\Support\Collection;

class BookingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('user.name')->sortable()->searchable(),
                TextColumn::make('car.brand.name')->sortable()->searchable(),
                TextColumn::make('car.name')->sortable()->searchable(),
                TextColumn::make('start_date')
                    ->date()
                    ->sortable(),
                TextColumn::make('end_date')
                    ->date()
                    ->sortable(),
                TextColumn::make('total_price')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('status')
                    ->badge()
                    ->icon(fn (string $state): string => match ($state) {
                        'pending'   => 'heroicon-o-clock',
                        'confirmed' => 'heroicon-o-check-circle',
                        'cancelled' => 'heroicon-o-x-circle',
                        'refused'   => 'heroicon-o-x-mark',
                        'active'    => 'heroicon-o-play-circle',
                        'expired'   => 'heroicon-o-exclamation-triangle',
                        'completed' => 'heroicon-o-check-badge',
                        'late'      => 'heroicon-o-exclamation-circle',
                        default     => 'heroicon-o-question-mark-circle',
                    })
                    ->color(fn (string $state): string => match ($state) {
                        'pending'   => 'warning',
                        'confirmed' => 'info',
                        'cancelled' => 'danger',
                        'refused'   => 'danger',
                        'active'    => 'success',
                        'expired'   => 'gray',
                        'completed' => 'info',
                        'late'      => 'warning',
                        default     => 'gray',
                    })
                    ->formatStateUsing(fn (string $state) => ucfirst($state)),
            ])
            ->filters([
                // TrashedFilter::make(),
                SelectFilter::make('brand_id')
                    ->label('Brand')
                    ->relationship('car.brand', 'name')
                    ->searchable()
                    ->preload(),
                SelectFilter::make('status')
                    ->label('Status')
                    ->options([
                        'pending' => 'Pending',
                        'confirmed' => 'Confirmed',
                        'cancelled' => 'Cancelled',
                        'refused' => 'Refused',
                        'active' => 'Active',
                        'expired' => 'Expired',
                        'completed' => 'Completed',
                        'late' => 'Late',
                    ])
            ])
            ->recordActions([
                ViewAction::make()->label(''),
                EditAction::make()->label(''),
                DeleteAction::make()->label(''),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    // ForceDeleteBulkAction::make(),
                    // RestoreBulkAction::make(),
                    BulkAction::make('mark_as_confirmed')
                        ->label('Confirm')
                        ->icon('heroicon-o-check')
                        ->color('success')
                        ->requiresConfirmation()
                        ->action(fn (Collection $records) => $records->whereIn('status', ['pending'])->each->update(['status' => 'confirmed'])),
                    BulkAction::make('mark_as_completed')
                        ->label('Mark as completed')
                        ->icon('heroicon-o-check-badge')
                        ->color('info')
                        ->requiresConfirmation()
                        ->action(fn (Collection $records) => $records->whereIn('status', ['pending'  ,'confirmed', 'active'])->each->update(['status' => 'completed'])),
                    BulkAction::make('mark_as_refused')
                        ->label('Refuse request')
                        ->icon('heroicon-o-x-mark')
                        ->color('danger')
                        ->requiresConfirmation()
                        ->action(fn (Collection $records) => $records->whereIn('status', ['pending', 'confirmed'])->each->update(['status' => 'refused'])),
                ]),
            ]);
    }
}
