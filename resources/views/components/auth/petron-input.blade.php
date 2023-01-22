@props(['type', 'name', 'placeholder', 'id'])
<input
    type="{{ $type }}"
    name="{{ $name }}"
    placeholder="{{ $placeholder }}"
    id="{{ $id }}"
    class="border-b-2 @error($name) border-chantilly-500 @else border-glacier-100 @enderror focus:border-chantilly-500 focus:outline-none py-2 px-4"
/>
