<?php

namespace Pspwebtech\Translatable;

use Illuminate\Support\Facades\App;
use Laravel\Nova\Fields\Field;
use Laravel\Nova\Http\Requests\NovaRequest;

class Translatable extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'translatable';

    /**
     * @param string $name
     * @param string $attribute
     * @param array $locales
     */
    public function __construct(string $name, string $attribute, array $locales = [])
    {
        parent::__construct($name, $attribute);

        /**
         * Filter invalid locales.
         */
        foreach ($locales as $locale) {
            $key = array_search($locale, config('translatable.locales'));
            if (!$key) {
                unset($locales[$key]);
            }
        }

        /**
         * If the locale list is empty, default to all locales.
         */
        if (empty($locales)) {
            $locales = config('translatable.locales');
        }

        /**
         * Pass current locale to component. That's how we know which language to render in index/details.
         */
        $this->withMeta(['appLocale' => App::getLocale()]);

        $this->resolveCallback = function () use ($locales) {
            $value = [];

            /**
             * Seed with empty data. Will be overwritten if model exists.
             * en_US => ''
             */
            foreach ($locales as $locale) {
                $value[$locale] = '';
            }

            /**
             * If model exists, seed with real data.
             * en_US => 'Title'
             */
            if ($this->resource->exists) {
                $translations = $this->resource->translations;
                foreach ($translations as $translation) {
                    $value[$translation->locale] = $translation->{$this->attribute};
                }
            }

            return json_encode($value, JSON_FORCE_OBJECT);
        };
    }

    /**
     * @return Translatable
     */
    public function text(): Translatable
    {
        return $this->withMeta(['asText' => true]);
    }

    /**
     * @return Translatable
     */
    public function textarea(): Translatable
    {
        return $this->withMeta(['asTextarea' => true]);
    }

    /**
     * Hydrate the given attribute on the model based on the incoming request.
     *
     * @param NovaRequest $request
     * @param string $requestAttribute
     * @param object $model
     * @param string $attribute
     * @return void
     */
    protected function fillAttributeFromRequest(
        NovaRequest $request,
        $requestAttribute,
        $model,
        $attribute
    ): void {
        /**
         *
         */
        if ($request->exists($requestAttribute)) {
            $locales = [];
            $input = json_decode($request->input($requestAttribute));
            foreach ($input as $k => $v) {
                $locales[$k] = [$requestAttribute => $v];
            }
            $model->fill(array_merge($locales, $request->except($model->translatedAttributes)));
        }
    }
}
