<x-layout title="{{ __('featured_creators.meta_title') }}">
    <x-featured-creators.hero>
        <x-slot name="nav">
            <x-ui.nav-glacier/>
        </x-slot>
        <x-slot name="heading">
            <h1 class="font-canela font-bold leading-tight text-glacier-900" style="font-size:48px">
                {!! __('featured_creators.hero_title') !!}
            </h1>
        </x-slot>
        <x-slot name="paragraph">
            <p class="text-base lg:text-lg">
                {!! __('featured_creators.hero_body') !!}
            </p>
        </x-slot>
    </x-featured-creators.hero>
    <x-ui.container>
        <x-featured-creators.creator-section :creators="$creators" />
    </x-ui.container>
    <x-ui.basic-cta
        subheading="{{ __('featured_creators.contact_us.subtitle') }}"
        heading="{{ __('featured_creators.contact_us.title') }}"
        body="{!! __('featured_creators.contact_us.body') !!}"
        buttonUrl="{{ nova_get_setting('contact_us_url') }}"
        buttonText="{{ __('featured_creators.contact_us.button') }}"
    />
</x-layout>
