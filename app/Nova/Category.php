<?php

namespace App\Nova;

use App\Nova\Rules\Translated;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Slug;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Pspwebtech\Translatable\Translatable;
use OptimistDigital\NovaSortable\Traits\HasSortableRows;

class Category extends Resource
{
    use HasSortableRows;

    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \App\Models\Category::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'name';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
        'slug',
    ];

    /**
     * @var int
     */
    public static int $priority = 1;

    /**
     * Determine if the given resource is authorizable.
     *
     * @return bool
     */
    public static function authorizable()
    {
        return false;
    }

    /**
     * Get the fields displayed by the resource.
     *
     * @param Request $request
     * @return array
     */
    public function fields(Request $request)
    {
        return [
            ID::make(__('ID'), 'id')
                ->sortable(),
            Slug::make(__('Slug'), 'slug')
                ->rules('required')
                ->sortable(),
            Translatable::make(__('Name'), 'name')
                ->rules('required', new Translated())
                ->text(),
            Textarea::make(__('Description'), 'description'),
            Select::make(__('Icon'), 'icon')
                ->options([
                    'kiss' => 'Kiss',
                    'rainbow' => 'Rainbow',
                    'dumbbell' => 'Dumbbell',
                    'camera' => 'Camera',
                    'food' => 'Food',
                    'sparkles' => 'Sparkles',
                    'baseball' => 'Baseball',
                    'trophy' => 'Trophy',
                    'map' => 'Map',
                    'chart' => 'Chart',
                    'car' => 'Car',
                    'music' => 'Music',
                    'paw' => 'Paw',
                    'airplane' => 'Airplane',
                    'game' => 'Game',
                    'person' => 'Person',
                    'smiley' => 'Smiley',
                    'sunglasses' => 'Sunglasses',
                    'newspaper' => 'Newspaper',
                    'wrench' => 'Wrench',
                    'school' => 'School',
                    'chip' => 'Chip',
                    'heart' => 'Heart',

                ])
                ->searchable()
                ->displayUsing(function ($value) {
                    return Str::title($value);
                })
                ->fillUsing(function ($request, $model, $attribute) {
                    $model->{$attribute} = Str::lower($request->$attribute);
                })
                ->hideFromIndex(),
            Text::make(__('Daily Clicks'), '24_hour_clicks')
                ->readonly()
                ->sortable()
                ->exceptOnForms(),
            Boolean::make(__('Show on Home'), 'show_on_home')
                ->default(false)
                ->hideFromIndex(),
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param Request $request
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param Request $request
     * @return array
     */
    public function filters(Request $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param Request $request
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param Request $request
     * @return array
     */
    public function actions(Request $request)
    {
        return [];
    }
}
