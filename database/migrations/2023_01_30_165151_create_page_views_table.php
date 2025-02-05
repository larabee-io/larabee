<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('page_views', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('session_id');
            $table->foreignUuid('website_id');

            $table->string('title');
            $table->string('url', 900);
            $table->string('referrer', 900)->nullable();
            $table->dateTime('created_at', 0);

            $table->index(['website_id', 'created_at']);
            $table->index(['session_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('page_views');
    }
};
