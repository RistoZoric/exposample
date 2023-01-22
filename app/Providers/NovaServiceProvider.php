<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Laravel\Nova\Cards\Help;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Nova;
use Laravel\Nova\NovaApplicationServiceProvider;
use Laravel\Nova\Panel;

class NovaServiceProvider extends NovaApplicationServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        Nova::sortResourcesBy(function ($resource) {
            return $resource::$priority ?? 9999;
        });

        \OptimistDigital\NovaSettings\NovaSettings::addSettingsFields([
            Text::make('Featured creators', 'default_featured_creators')
                ->help('Default value, to be used when there are no Premium creators - comma-separated list of usernames'),
            Panel::make('Meta', [
                Text::make('Title', 'meta_title'),
                Textarea::make('Description', 'meta_description'),
                Text::make('Keywords', 'meta_keywords'),
            ]),
            Panel::make('External URLs', [
                Text::make('Instagram URL', 'instagram_url'),
                Text::make('Twitter URL', 'twitter_url'),
                Text::make('Facebook URL', 'facebook_url'),
                Text::make('YouTube URL', 'youtube_url'),
                Text::make('TikTok URL', 'tiktok_url'),
                Text::make('Discord URL', 'discord_url'),
                Text::make('Help Centre URL', 'help_centre_url'),
                Text::make('Contact Us URL', 'contact_us_url'),
                Text::make('Legal URL', 'legal_url'),
                Text::make('Guidelines for Creators URL', 'guidelines_for_creators_url'),
                Text::make('Guidelines for Reviewers URL', 'guidelines_for_reviewers_url'),
            ]),
        ], [], 'General');
        \OptimistDigital\NovaSettings\NovaSettings::addSettingsFields([
            Panel::make('General', [
                Text::make('Sender Address', 'sender_address'),
            ]),
        ], [], 'Email');
    }

    /**
     * Register the Nova routes.
     *
     * @return void
     */
    protected function routes()
    {
        Nova::routes()
            ->withAuthenticationRoutes()
            ->withPasswordResetRoutes()
            ->register();
    }

    /**
     * Register the Nova gate.
     *
     * This gate determines who can access Nova in non-local environments.
     *
     * @return void
     */
    protected function gate()
    {
        Gate::define('viewNova', function ($user) {
            return $user->is_admin;
        });
    }

    /**
     * Get the cards that should be displayed on the default Nova dashboard.
     *
     * @return array
     */
    protected function cards()
    {
        return [
            new Help,
        ];
    }

    /**
     * Get the extra dashboards that should be displayed on the Nova dashboard.
     *
     * @return array
     */
    protected function dashboards()
    {
        return [];
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    public function tools()
    {
        return [
            new \OptimistDigital\NovaSettings\NovaSettings,
        ];
    }
}
