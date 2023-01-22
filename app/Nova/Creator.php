<?php

namespace App\Nova;

use App\Models\Category;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Laravel\Nova\Fields\Badge;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\Date;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Password;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Panel;
use Laravel\Nova\Http\Requests\NovaRequest;

class Creator extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \App\Models\User::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'username';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
    ];

    /**
     * @var int
     */
    public static int $priority = 2;

    public static function authorizable()
    {
        return false;
    }

    /**
     * Build an "index" query for the given resource.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public static function indexQuery(NovaRequest $request, $query)
    {
        return $query->where('is_creator', 1);
    }

    /**
     * Get the fields displayed by the resource.
     *
     * @param Request $request
     * @return array
     */
    public function fields(Request $request)
    {
        $categories = Category::all();

        return [
            ID::make(__('ID'), 'id')
                ->sortable(),

            Text::make(__('Fingerprint'), 'fingerprint')
                ->readonly()
                ->onlyOnDetail(),

            Images::make('Avatar', 'avatars')
                ->conversionOnIndexView('avatar'),

            Text::make(__('Username'), 'username')
                ->sortable()
                ->rules('required'),

            Text::make(__('Full name'), 'full_name')
                ->sortable()
                ->rules('required'),
            
            Text::make(__('Email'), 'email')
                ->sortable()
                ->rules('required', 'email')
                ->creationRules('unique:users,email')
                ->updateRules('unique:users,email,{{resourceId}}'),

            Text::make(__('Phone number'), 'phone_number')
                ->hideFromIndex(),

            Select::make(__('Gender'), 'gender')
                ->options([
                    'male' => 'Male',
                    'female' => 'Female',
                    'other' => 'Other',
                ])
                ->displayUsing(function ($value) {
                    return Str::title($value);
                })
                ->fillUsing(function ($request, $model, $attribute) {
                    $model->{$attribute} = Str::lower($request->$attribute);
                })
                ->hideFromIndex(),

            Date::make(__('Date of Birth'), 'date_of_birth')
                ->hideFromIndex(),

            Select::make(__('Country'), 'country')
                ->options(config('countries'))
                ->searchable()
                ->hideFromIndex(),

            // Select::make(__('Type'), 'type')
            //     ->options([
            //         'reviewer' => 'Reviewer',
            //         'creator' => 'Creator',
            //     ])
            //     ->displayUsing(function ($value) {
            //         return Str::title($value);
            //     })
            //     ->fillUsing(function ($request, $model, $attribute) {
            //         $model->{$attribute} = Str::lower($request->$attribute);
            //     })
            //     ->hideFromIndex(),

            Select::make(__('Category'), 'category_id')
                ->options($categories->mapWithKeys(function ($category) {
                    return [$category->id => $category->name];
                }))
                ->searchable()
                ->displayUsingLabels()
                ->hideFromIndex(),

            Textarea::make(__('Description'), 'description')
                ->hideFromIndex(),

            Text::make(__('Searchable tags'), 'searchable_tags')
                ->hideFromIndex(),

            Password::make('Password')
                ->onlyOnForms()
                ->creationRules('required', 'string', 'min:8')
                ->updateRules('nullable', 'string', 'min:8'),

            Text::make(__('Verification code'), 'verification_code')
                ->readonly()
                ->onlyOnDetail(),

            DateTime::make('Created At', 'created_at'),

            new Panel('Billing', $this->billingFields()),
            new Panel('OnlyFans', $this->onlyfansFields()),
            new Panel('Fansly', $this->fanslyFields()),
            new Panel('Patreon', $this->patreonFields()),
            new Panel('Twitch', $this->twitchFields()),
            new Panel('YouTube', $this->youtubeFields()),
            new Panel('Kickstarter', $this->kickstarterFields()),
            new Panel('SoundCloud', $this->soundcloudFields()),
        ];
    }

    /**
     * @return array
     */
    protected function billingFields(): array
    {
        return [
            Badge::make(__('Plan'), function () {
                return $this->getPlanName();
            })
                ->map([
                    'Basic' => 'info',
                    'Standard' => 'success',
                    'Premium' => 'success',
                ])
                ->exceptOnForms(),
            Text::make('Monthly review invites', 'monthly_review_invites_count')
                ->readonly()
                ->exceptOnForms()
                ->hideFromIndex(),
            Text::make(__('Stripe ID'), 'stripe_id')
                ->exceptOnForms()
                ->hideFromIndex(),
        ];
    }

    /**
     * @return array
     */
    protected function onlyfansFields(): array
    {
        return [
            Boolean::make(__('Verified'), 'onlyfans_verified')
                ->hideFromIndex(),

            Text::make(__('Username'), 'onlyfans_username')
                ->hideFromIndex(),
        ];
    }

    /**
     * @return array
     */
    protected function fanslyFields(): array
    {
        return [
            Boolean::make(__('Verified'), 'fansly_verified')
                ->hideFromIndex(),

            Text::make(__('Username'), 'fansly_username')
                ->hideFromIndex(),
        ];
    }

    /**
     * @return array
     */
    protected function patreonFields(): array
    {
        return [
            Boolean::make(__('Verified'), 'patreon_verified')
                ->hideFromIndex(),

            Text::make(__('Username'), 'patreon_username')
                ->hideFromIndex(),
        ];
    }

    /**
     * @return array
     */
    protected function twitchFields(): array
    {
        return [
            Boolean::make(__('Verified'), 'twitch_verified')
                ->hideFromIndex(),

            Text::make(__('Username'), 'twitch_username')
                ->hideFromIndex(),
        ];
    }

    /**
     * @return array
     */
    protected function youtubeFields(): array
    {
        return [
            Boolean::make(__('Verified'), 'youtube_verified')
                ->hideFromIndex(),

            Text::make(__('Username'), 'youtube_username')
                ->hideFromIndex(),
        ];
    }

    /**
     * @return array
     */
    protected function kickstarterFields(): array
    {
        return [
            Boolean::make(__('Verified'), 'kickstarter_verified')
                ->hideFromIndex(),

            Text::make(__('Username'), 'kickstarter_username')
                ->hideFromIndex(),
        ];
    }

        /**
     * @return array
     */
    protected function soundcloudFields(): array
    {
        return [
            Boolean::make(__('Verified'), 'soundcloud_verified')
                ->hideFromIndex(),

            Text::make(__('Username'), 'soundcloud_username')
                ->hideFromIndex(),
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function filters(Request $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function actions(Request $request)
    {
        return [];
    }
}
