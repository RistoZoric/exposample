@props(['heading', 'subheading', 'action'])
<div class="bg-white text-black text-center rounded-4xl self-center py-12 px-8 lg:px-16 w-full lg:w-3/4 shadow-sm">
    <div class="flex flex-col justify-center items-center space-y-1">
        <h1 class="font-canela font-medium text-3xl lg:text-4xl text-chantilly-500 capitalize">{{ $heading }}</h1>
        <h2 class="text-base lg:text-lg">{{ $subheading }}</h2>
        <form action="{{ $action }}" method="post" class="w-full lg:w-10/12">
            @csrf
            {{ $slot }}
        </form>
    </div>
</div>
