<div x-data>
    <select
        class="bg-glacier-500 font-medium text-white text-base rounded-xl py-2 px-4 focus:outline-none appearance-none w-full"
        x-on:change="(event) => Livewire.emit('change', event.target.value)"
        >
        @foreach (config('translatable.locales') as $locale)
            <option value="{{ $locale }}" @if (Session::get('locale') === $locale) selected @endif>
                {{ Locale::getDisplayLanguage($locale) }}
            </option>
        @endforeach
    </select>
</div>
