@props(['nav', 'heading', 'paragraph'])
<div class="bg-glacier-100 text-black">
    {{ $nav }}
    <div class="pt-8 pb-16">
        <x-ui.container>
            <div class="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-24 items-center justify-between">
                <div class="flex flex-col justify-center w-full space-y-8 w-full lg:w-1/2 text-center lg:text-left">
                    {!! $heading !!}
                    {!! $paragraph !!}
                    <livewire:index.hero-search />
                </div>
                <img src="{{ asset('images/featured-creators@2x.png') }}" class="w-full lg:w-4/6 xl:w-5/12"/>
            </div>
        </x-ui.container>
    </div>
</div>
