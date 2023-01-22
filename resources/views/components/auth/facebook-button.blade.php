@props(['href'])
<a href="{{ $href }}" class="flex flex-row items-center md:justify-center space-x-4 w-full p-4 font-medium text-sm text-black shadow-sm shadow-glacier-500/30 rounded-full">
    <x-icons.social.facebook class="w-4 text-facebook" />
    <span>{{ __('login.continue_with_facebook') }}</span>
</a>