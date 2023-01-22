<x-layout title="{{ nova_get_setting('meta_title') }}">
    <x-index.hero :categories="$categories">
        <x-slot name="nav">
            <x-ui.nav1 />
        </x-slot>
        <x-slot name="heading">
            <h1 class="font-canela font-bold text-4xl lg:text-5.5xl leading-tight">
                {!! __('home.hero') !!}
            </h1>
        </x-slot>
    </x-index.hero>
    
    <x-index.two-column-section class="bg-chantilly-100 pt-8" spaceClass="lg:space-x-16">
        <x-slot name="left">
            <h2 class="font-canela font-medium text-4xl lg:text-5xl lg:leading-snug"> {!! __('home.cta_reviews.title') !!} </h2>
            <p class="text-lg lg:text-xl text-gray-500"> {!! __('home.cta_reviews.body') !!} </p>
            <a href="{{ route('pages.creators') }}"
                class="bg-transparent hover:bg-glacier-100 py-4 px-12 font-bold text-chantilly-500 text-2xl uppercase border-2 border-chantilly-500 w-full lg:w-max transition-all">
                {{ __('home.cta_reviews.button') }}
            </a>
        </x-slot>
        <x-slot name="right">
            <img data-src="{{ asset('images/home-review-cat-n2.svg') }}" class="lazy h-full w-full" alt="Illustration of supported platforms" />
        </x-slot>
    </x-index.two-column-section>
    <x-index.two-column-section class="bg-white py-16" spaceClass="lg:space-x-24">
        <x-slot name="left">
            <img data-src="{{ asset('images/creators-cta.jpg') }}" class="lazy h-56 w-full rounded-2xl object-cover" alt="Woman creator" />
        </x-slot>
        <x-slot name="right">
            <h2 class="font-canela font-medium text-4xl lg:text-5xl lg:leading-snug"> {!! __('home.cta_creators.title') !!} </h2>
            <p class="text-lg lg:text-xl text-gray-500"> {!! __('home.cta_creators.body') !!} </p>
            <a href="{{ route('pages.featured_creators') }}"
                class="bg-transparent hover:bg-glacier-100 py-4 px-12 font-bold text-chantilly-500 text-2xl uppercase border-2 border-chantilly-500 w-full lg:w-max transition-all">
                {{ __('home.cta_asc.button') }}
            </a>
        </x-slot>
    </x-index.two-column-section>
    <x-index.reviews-masonry-section :reviews="$reviews">
        <x-slot name="subheading">
            <h3 class="font-semibold text-lg leading-tight tracking-widest uppercase"> {!! __('home.reviews_masonry.subtitle') !!} </h3>
        </x-slot>
        <x-slot name="heading">
            <h2 class="font-canela font-medium text-4xl leading-tight"> {!! __('home.reviews_masonry.title') !!} </h2>
        </x-slot>
    </x-index.reviews-masonry-section>
    <x-index.review-single-section :review="$highlightedReview" />
    <x-ui.footer />
</x-layout>
