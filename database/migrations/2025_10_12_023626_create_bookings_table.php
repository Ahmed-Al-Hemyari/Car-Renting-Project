<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->date('start_date');
            $table->date('end_date');
            // $table->integer('days');
            $table->decimal('total_price', 10, 2);
            $table->longText('notes')->nullable();
            $table->enum('status', [
                'pending', 
                'confirmed', 
                'cancelled', 
                'refused', 
                'active', 
                'expired', 
                'completed', 
                'late'
            ])->default('pending');
            $table->boolean('rated')->default(false);
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('car_id')->constrained()->cascadeOnDelete();
            $table->softDeletes('deleted_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
