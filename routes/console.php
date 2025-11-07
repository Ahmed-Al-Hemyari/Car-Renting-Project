<?php

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

return function (Schedule $schedule) {
    $schedule->call(function () {
        // Update to active
        DB::table('bookings')
            ->where('start_date', '<=', now()->toDateString())
            ->where('status', 'confirmed')
            ->update(['status' => 'active']);
        // Update to expired
        DB::table('bookings')
            ->where('start_date', '<=', now()->toDateString())
            ->where('status', 'pending')
            ->update(['status' => 'expired']);
        // Update to late
        DB::table('bookings')
            ->where('end_date', '<=', now()->toDateString())
            ->where('status', 'active')
            ->update(['status' => 'late']);
    })->daily();
};
