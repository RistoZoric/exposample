<?php

namespace App\Nova;

use App\Models\Category;
use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Laravel\Nova\Fields\Date;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class Reviewer extends Resource
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
    public static int $priority = 3;

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
        return $query->where('is_reviewer', 1);
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
