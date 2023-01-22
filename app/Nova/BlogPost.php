<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\Avatar;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Slug;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Panel;

class BlogPost extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \App\Models\BlogPost::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'title';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'slug',
        'title',
        'author_name',
    ];

    /**
     * @var int
     */
    public static int $priority = 5;

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
            Image::make(__('Image'), 'image')
                ->disk('gcs')
                ->path('/blog_posts')
                ->required(),
            Slug::make(__('Slug'), 'slug')
                ->required()
                ->rules('required'),
            Text::make(__('Title'), 'title')
                ->sortable()
                ->required()
                ->rules('required'),
            Textarea::make(__('Body'), 'body')
                ->sortable()
                ->required()
                ->rules('required'),
            new Panel('Author', $this->authorFields()),
            new Panel('Meta', $this->metaFields()),
        ];
    }

    protected function authorFields()
    {
        return [
            Avatar::make(__('Image'), 'author_image')
                ->path('/blog_posts/authors')
                ->maxWidth(50)
                ->required()
                ->hideFromIndex(),
            Text::make(__('Name'), 'author_name')
                ->required()
                ->rules('required')
                ->hideFromIndex(),
        ];
    }

    protected function metaFields()
    {
        return [
            Text::make(__('Title'), 'meta_title')
                ->required()
                ->rules('required')
                ->hideFromIndex(),
            Textarea::make(__('Description'), 'meta_description')
                ->required()
                ->rules('required'),
            Text::make(__('Keywords'), 'meta_keywords')
                ->required()
                ->rules('required')
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
