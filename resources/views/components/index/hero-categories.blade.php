@props(['categories'])
<div class="flex flex-col space-y-4">
    <div class="flex flex-row justify-between font-bold text-md lg:text-lg">
        <p> {{ __('home.categories.title') }} </p>
        <a href="{{ route('categories.index') }}" class="hover:underline"> {{ __('home.categories.view_all') }} </a>
    </div>
    <div class="grid grid-flow-row auto-rows-max grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 font-bold text-xxs md:text-xs">
        <x-index.hero-category slug="top-rated" name="Top-rated" class="bg-glacier-500 hover:bg-glacier-600 text-white transition-all">
            <x-slot name="icon">
                <x-icons.star class="w-6 text-white" />
            </x-slot>
        </x-index.hero-category>
        <x-index.hero-category slug="near-you" name="Near you" class="bg-glacier-500 hover:bg-glacier-600 text-white transition-all">
            <x-slot name="icon">
                <x-icons.location-marker class="w-6 text-white" />
            </x-slot>
        </x-index.hero-category>
        <x-index.hero-category slug="featured" name="Featured" class="bg-glacier-500 hover:bg-glacier-600 text-white transition-all">
            <x-slot name="icon">
                <x-icons.chart-bar class="w-6 text-white" />
            </x-slot>
        </x-index.hero-category>
        @foreach ($categories as $category)
            <x-index.hero-category :slug="$category->slug" :name="$category->name" class="bg-white hover:bg-gray-200 text-black transition-all">
                <x-slot name="icon">
                    <x-icons.category :icon="$category->icon" class="w-6 text-glacier-500" />
                </x-slot>
            </x-index.hero-category>
        @endforeach
    </div>
</div>
