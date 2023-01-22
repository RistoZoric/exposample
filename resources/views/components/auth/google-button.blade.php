@props(['href'])
<a href="{{ $href }}" class="flex flex-row items-center md:justify-center space-x-4 w-full p-4 font-medium text-sm text-black shadow-sm shadow-glacier-500/30 rounded-full">
    <x-icons.social.google class="w-4 text-google" />
    <span>{{ __('login.continue_with_google') }}</span>
</a>