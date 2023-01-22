
<nav class="top-0 z-10 text-md font-semibold w-full bg-transparent text-white pt-8 pb-4">
    <x-ui.container>
        <div class="flex flex-row justify-between items-center">
            <a href="{{ route('pages.home') }}">
                <img :src="!scrolledFromTop ? '{{ asset('images/logo/white-lg.png') }}' : '{{ asset('images/logo/gradient-lg.png') }}'" class="h-8" alt="Privy logo" />
            </a>
            <div class="hidden lg:flex flex-row items-center space-x-8">

            </div>

            <div
                class="lg:hidden fixed top-0 left-0 bg-glacier-500 text-white font-semibold w-full z-40 p-4 pt-8 px-6 md:px-16"
                x-show="navOpen"
                x-cloak
                x-transition
            >
                <div class="flex flex-col items-start space-y-8">
                    <div class="flex flex-row justify-between items-center w-full">
                        <img src="{{ asset('images/logo/white-lg.png') }}" class="h-8" alt="Privy Logo" />
                        <div x-on:click="navOpen = false">
                            <x-icons.x class="w-10 text-white" />
                        </div>
                    </div>
                    @if (!Route::is('pages.home') && !Route::is('pages.featured_creators'))
                        <form action="/categories/search?q=" method="GET" role="search">
                            <div class="flex flex-row border rounded-3xl border-white">
                                <input type="text" class="px-4 py-2 text-white bg-transparent placeholder-white focus:ring-0 focus:outline-none" placeholder="Search..." value="" name="q">
                                <button type="submit" class="px-4 text-white">
                                    <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    @endif
                    <a href="{{ route('pages.home') }}">{{ __('navigation.home') }}</a>
                    <a href="{{ route('categories.index') }}">{{ __('navigation.categories') }}</a>
                    <a href="{{ route('pages.about_us') }}">{{ __('navigation.about_us') }}</a>
                    <a href="{{ route('blog.index') }}">{{ __('navigation.blog') }}</a>
                    @auth
                        <x-ui.avatar src="{{ Auth::user()->avatar()?->getFullUrl('avatar') }}" class="w-8 rounded-full" />
                    @endauth
                    @guest
                        <a href="{{ route('auth.login') }}">{{ __('navigation.login') }}</a>
                        <a href="{{ route('auth.register') }}">{{ __('navigation.register') }}</a>
                    @endguest
                    @if (Route::current()->name === 'pages.creators')
                        <a href="{{ route('pages.home') }}">{{ __('navigation.for_reviewers') }}</a>
                    @else
                        <a href="{{ route('pages.creators') }}" class="py-[8px] px-16 rounded-2xl bg-white text-glacier-500">
                            {{ __('navigation.for_onlyfans_creators') }}
                        </a>
                    @endif
                </div>
            </div>
        </div>
    </x-ui.container>
</nav>
