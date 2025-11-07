<?php

namespace App\Filament\Resources\Users\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Wizard;
use Filament\Schemas\Components\Wizard\Step;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Storage;

class UserForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Wizard::make([
                    Step::make('Info')
                        ->schema([
                            TextInput::make('name')
                                ->required(),
                            TextInput::make('email')
                                ->label('Email address')
                                ->email()
                                ->required(),
                            FileUpload::make('image')
                                ->directory('users')
                                ->image()
                                ->saveUploadedFileUsing(function ($file, $state, $set, $get) {
                                    $name  = $get('name') ?? 'image';

                                    $filename = \Illuminate\Support\Str::slug($name);

                                    $manager = new \Intervention\Image\ImageManager(new \Intervention\Image\Drivers\Gd\Driver());
                                    $image = $manager->read($file->getRealPath())->encode(new \Intervention\Image\Encoders\WebpEncoder(80));

                                    $webpPath = 'users/' . $filename . '.webp';
                                    Storage::disk('public')->put($webpPath, (string) $image);

                                    return $webpPath;
                                }),
                        ]),
                    Step::make('Password')
                        ->schema([
                            TextInput::make('password')
                                ->password()
                                ->required()
                                ->minLength(8),
                            TextInput::make('password_confirmation')
                                ->label('Confirm Password')
                                ->password()
                                ->required()
                                ->same('password'),
                        ]),
                ])->columnSpanFull(),

                // DateTimePicker::make('email_verified_at'),

                // Textarea::make('two_factor_secret')
                //     ->default(null)
                //     ->columnSpanFull(),
                // Textarea::make('two_factor_recovery_codes')
                //     ->default(null)
                //     ->columnSpanFull(),
                // DateTimePicker::make('two_factor_confirmed_at'),
                // Toggle::make('admin')
                //     ->required(),
            ]);
    }
}
