@props(['slug', 'icon', 'name', 'class'])
<a href="{{ route('categories.view', $slug) }}">
    <div class="{{ $class }} p-4 lg:p-5 rounded-3xl shadow-sm">
        <div class="flex flex-col items-center space-y-2">
            {{ $icon }}
            <p class="whitespace-nowrap">{{ $name }}</p>
        </div>
    </div>
</a>
