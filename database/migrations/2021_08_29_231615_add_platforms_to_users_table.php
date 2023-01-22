<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPlatformsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('onlyfans_username')->nullable();
            $table->string('fansly_username')->nullable();
            $table->boolean('fansly_verified')->default(false);
            $table->string('patreon_username')->nullable();
            $table->boolean('patreon_verified')->default(false);
            $table->string('twitch_username')->nullable();
            $table->boolean('twitch_verified')->default(false);
            $table->string('youtube_username')->nullable();
            $table->boolean('youtube_verified')->default(false);
            $table->string('kickstarter_username')->nullable();
            $table->string('kickstarter_verified')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('onlyfans_username');
            $table->dropColumn('fansly_username');
            $table->dropColumn('fansly_verified');
            $table->dropColumn('patreon_username');
            $table->dropColumn('patreon_verified');
            $table->dropColumn('twitch_username');
            $table->dropColumn('twitch_verified');
            $table->dropColumn('youtube_username');
            $table->dropColumn('youtube_verified');
            $table->dropColumn('kickstarter_username');
            $table->dropColumn('kickstarter_verified');
        });
    }
}
