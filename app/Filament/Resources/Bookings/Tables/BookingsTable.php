<?php

namespace App\Filament\Resources\Bookings\Tables;

use App\Models\Booking;
use App\Models\Brand;
use Filament\Actions\Action;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Actions\ViewAction;
use Filament\Forms\Components\Builder;
use Filament\Notifications\Notification;
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
                        'confirmed' => 'success',
                        'cancelled' => 'danger',
                        'refused'   => 'danger',
                        'active'    => 'primary',
                        'expired'   => 'gray',
                        'completed' => 'gray',
                        'late'      => 'warning',
                        default     => 'gray',
                    })
                    ->formatStateUsing(fn (string $state) => ucfirst($state)),

            ])
            ->filters([
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
                // ViewAction::make()->label(''),
                Action::make('mark_as_confirmed')
                    ->label('')
                    ->icon('heroicon-o-check')
                    ->color('success')
                    ->tooltip('Confirm Request')
                    ->requiresConfirmation()
                    ->modalHeading('Confirm marking as confirmed')
                    ->modalDescription('Are you sure you want to confirm this request?')
                    ->modalSubmitActionLabel('Yes, Confirm')
                    ->action(function ($record) {
                        if ($record->status !== 'pending') {
                            Notification::make()
                                ->title('This request cannot be confirmed.')
                                ->warning()
                                ->send();
                            return;
                        }

                        $record->update(['status' => 'confirmed']);

                        Notification::make()
                            ->title('Request has been confirmed successfully.')
                            ->success()
                            ->send();
                    }),

                Action::make('mark_as_completed')
                    ->label('')
                    ->icon('heroicon-o-check-badge')
                    ->color('info')
                    ->tooltip('Mark as Completed')
                    ->requiresConfirmation()
                    ->modalHeading('Confirm marking as completed')
                    ->modalDescription('Are you sure you want to mark this booking as completed?')
                    ->modalSubmitActionLabel('Yes, Complete')
                    ->action(function ($record) {
                        if (! in_array($record->status, ['pending', 'confirmed', 'active'])) {
                            Notification::make()
                                ->title('This booking cannot be marked as completed.')
                                ->warning()
                                ->send();
                            return;
                        }

                        $record->update(['status' => 'completed']);

                        Notification::make()
                            ->title('Booking has been marked as completed.')
                            ->success()
                            ->send();
                    }),

                Action::make('mark_as_refused')
                    ->label('')
                    ->icon('heroicon-o-x-mark')
                    ->color('danger')
                    ->tooltip('Refuse Request')
                    ->requiresConfirmation()
                    ->modalHeading('Confirm refusing request')
                    ->modalDescription('Are you sure you want to refuse this request? This action cannot be undone.')
                    ->modalSubmitActionLabel('Yes, Refuse')
                    ->action(function ($record) {
                        if (! in_array($record->status, ['pending', 'confirmed'])) {
                            Notification::make()
                                ->title('This request cannot be refused.')
                                ->warning()
                                ->send();
                            return;
                        }

                        $record->update(['status' => 'refused']);

                        Notification::make()
                            ->title('Request has been refused.')
                            ->success()
                            ->send();
                    }),
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
