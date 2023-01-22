@props(['class', 'text','id'])
<button type="button" id="{{ $id }}"  class="flex flex-row items-center justify-center w-full p-4 font-bold text-base {{ $class }} rounded-full">
    {{ $text }} 
    <div class="patreon-loader"></div>
</button>