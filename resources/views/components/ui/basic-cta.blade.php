@props(['subheading', 'heading', 'body', 'buttonUrl', 'buttonText'])
<div class="bg-glacier-100 py-16 px-6">
    <x-ui.container>
        <div class="flex flex-col space-y-5 items-center text-center">
            <p class="font-semibold text-2xl capitalize">{{ $subheading }}</p>
            <h1 class="font-bold font-canela text-4xl lg:text-5xl">{{ $heading }}</h1>
            <p class="text-lg text-center text-gray-600">{!! $body !!}</p>
            <a href="{{ $buttonUrl }}" target="_blank" class="bg-transparent hover:bg-glacier-200 p-2 px-6 font-bold text-chantilly-500 text-base uppercase border-2 border-chantilly-500 w-full lg:w-max transition-all">
                {{ $buttonText }}
            </a>
        </div>
    </x-ui.container>
</div>
