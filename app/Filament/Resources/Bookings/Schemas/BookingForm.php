<?php

namespace App\Filament\Resources\Bookings\Schemas;

use App\Models\Car;
use Carbon\Carbon;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;

class BookingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
        ->components([
                Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),
                Select::make('car_id')
                    ->relationship('car', 'name')
                    ->required(),
                DatePicker::make('start_date')
                    ->required(),
                DatePicker::make('end_date')
                    ->required(),
                TextInput::make('total_price')
                    ->label('Total Price ($)')
                    ->numeric()
                    ->required()
                    ->disabled()
                    ->dehydrated(true) // still saves to database
                    ->reactive()
                    ->suffix('USD')
                    ->afterStateHydrated(function ($state, callable $set, $get) {
                        // when form is loaded, recalc if needed
                        $car = Car::find($get('car_id'));
                            if ($car && $get('start_date') && $get('end_date')) {
                                $start = Carbon::parse($get('start_date'));
                                $end = Carbon::parse($get('end_date'));
                                $days = $end->diffInDays($start);
                                $set('total_price', $car->price * max($days, 1));
                            }
                        })
                    ->reactive()
                    ->afterStateUpdated(function ($state, callable $set, $get) {
                        $car = Car::find($get('car_id'));
                        if (! $car) {
                            $set('total_price', null);
                            return;
                        }

                        if ($get('start_date') && $get('end_date')) {
                            $start = Carbon::parse($get('start_date'));
                            $end = Carbon::parse($get('end_date'));

                            $days = $end->diffInDays($start);
                            $total = $car->price * max($days, 1);

                            $set('total_price', $total);
                        }
                    }),
                Select::make('status')
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
                    ->default('pending')
                    ->required(),
                Textarea::make('notes')
                    ->default(null)
                    ->columnSpanFull(),
            ]);
    }
}
