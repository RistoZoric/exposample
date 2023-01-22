<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\Badge;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Panel;
use App\Nova\Reviewer;
use App\Nova\Creator;

class Review extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \App\Models\Review::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'title';

    /**
     * @var int
     */
    public static int $priority = 4;

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
            BelongsTo::make(__('Reviewer'), 'reviewer', Reviewer::class)
                ->searchable(),
            BelongsTo::make(__('Creator'), 'creator', Creator::class)
                ->searchable(),
            Number::make(__('Rating'), 'rating')
                ->min(1)
                ->max(5)
                ->step(1),
            Text::make(__('Title'), 'title'),
            Textarea::make(__('Description'), 'description'),
            Textarea::make(__('Response'), 'response'),
            Badge::make(__('Status'), 'status')
                ->map([
                    'flagged' => 'danger',
                    'under_review' => 'warning',
                    'published' => 'success',
                ])
                ->exceptOnForms(),
            Select::make(__('Status'), 'status')
                ->options([
                    'flagged' => 'Flagged',
                    'under_review' => 'Under review',
                    'published' => 'Published',
                ])
                ->onlyOnForms(),
            Boolean::make(__('Verified'), 'is_verified'),
            new Panel('Flag', $this->flagFields()),
        ];
    }

    /**
     * @return array
     */
    protected function flagFields(): array
    {
        return [
            Textarea::make(__('Reason'), 'flag_reason')
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
 