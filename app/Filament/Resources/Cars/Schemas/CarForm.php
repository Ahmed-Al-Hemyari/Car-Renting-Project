<?php

namespace App\Filament\Resources\Cars\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\BelongsToSelect;
use Filament\Forms\Components\Select;
use Filament\Schemas\Schema;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\WebpEncoder;
use Intervention\Image\ImageManager;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;

class CarForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('brand_id')
                    ->relationship('brand', 'name')
                    ->required(),
                TextInput::make('name')
                    ->required(),
                Select::make('category_id')
                    ->relationship('category', 'name')
                    ->required(),
                TextInput::make('price')
                    ->numeric()
                    ->required()
                    ->prefix('$'),
                FileUpload::make('image')
                    ->directory('cars')
                    ->image()
                    ->saveUploadedFileUsing(function ($file, $state, $set, $get) {
                        // Get the selected brand ID from the form
                        $brandId = $get('brand_id');

                        // Lookup the brand name
                        $brand = \App\Models\Brand::find($brandId)?->name ?? 'car';
                        $name  = $get('name') ?? 'image';

                        $filename = \Illuminate\Support\Str::slug($brand . '-' . $name);

                        $manager = new \Intervention\Image\ImageManager(new \Intervention\Image\Drivers\Gd\Driver());
                        $image = $manager->read($file->getRealPath())->encode(new \Intervention\Image\Encoders\WebpEncoder(80));

                        $webpPath = 'cars/' . $filename . '.webp';
                        Storage::disk('public')->put($webpPath, (string) $image);

                        return $webpPath;
                    }),
            ]);
    }
}
