@props(['class', 'text'])
<button type="submit" class="flex flex-row items-center justify-center w-full p-4 font-bold text-base {{ $class }} rounded-full">
    {{ $text }}
</button>