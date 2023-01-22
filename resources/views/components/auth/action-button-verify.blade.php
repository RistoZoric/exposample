@props(['class', 'text','id', 'type'])
<button type="button" id="{{ $id }}"  onclick="window.location.href='/verify/{{$type}}'" class="flex flex-row items-center justify-center w-full p-4 font-bold text-base {{ $class }} rounded-full">
    <span class="verify-button-text">{{ $text }}</span>
    <span class="veryfied">&#10003;</span>
</button>