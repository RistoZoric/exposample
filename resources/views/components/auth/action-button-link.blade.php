@props(['href', 'class', 'text'])
<a href="{{ $href }}" class="flex flex-row items-center justify-center w-full p-4 font-bold text-base {{ $class }} rounded-full">
    {{ $text }}
</a>