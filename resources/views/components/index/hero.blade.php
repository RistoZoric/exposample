@props(['nav', 'heading', 'categories'])
<div class="bg-homeHero text-white">
    {{ $nav }}
    <div class="pt-8 pb-16">
        <x-ui.container>
            <div class="flex flex-col justify-center w-full lg:w-2/3 xl:w-1/2 space-y-8">
                {!! $heading !!}
                <livewire:index.hero-search />
                <x-index.hero-categories :categories="$categories" />
            </div>
        </x-ui.container>
    </div>
</div>