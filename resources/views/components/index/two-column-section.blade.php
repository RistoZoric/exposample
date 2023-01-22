@props(['class', 'spaceClass', 'left', 'right'])
<div class="{{ $class }}">
    <x-ui.container>
        <div class="flex flex-col lg:flex-row lg:justify-between items-center space-y-8 lg:space-y-0 {{ $spaceClass }}">
            <div class="flex flex-col items-center lg:items-start space-y-6 w-full lg:w-1/2 text-center lg:text-left">
                {!! $left !!}
            </div>
            <div class="flex flex-col items-center lg:items-start space-y-6 w-full lg:w-1/2 text-center lg:text-left">
                {!! $right !!}
            </div>
        </div>
    </x-ui.container>
</div>
