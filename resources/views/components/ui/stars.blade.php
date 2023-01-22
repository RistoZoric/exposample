@props(['rating', 'class'])
@for ($stars = 1; $stars <= $rating; $stars++)
    <x-icons.star class="{{ $class }} h-full text-yellow-400" />
@endfor
@for ($stars = 1; $stars <= 5 - $rating; $stars++)
    <x-icons.star class="{{ $class }} h-full text-gray-300" />
@endfor
