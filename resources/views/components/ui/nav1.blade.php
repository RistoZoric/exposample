@if (Route::is('pages.home'))
<x-index.call-to-action-section></x-index.call-to-action-section>
@endif
<nav class="top-0 z-10 text-md font-semibold w-full"
    :class="{'static bg-transparent text-white pt-8 pb-4': !scrolledFromTop, 'fixed bg-white text-chantilly-500 py-6 shadow-lg': scrolledFromTop}">
    <x-ui.container>
        <div class="flex flex-row justify-between items-center">
            <a href="{{ route('pages.home') }}">
                <img :src="!scrolledFromTop ? '{{ asset('images/logo/white-lg.png') }}' : '{{ asset('images/logo/gradient-lg.png') }}'" class="h-8" alt="Privy logo" />
            </a>
            <div class="hidden lg:flex flex-row items-center space-x-8">
                @if (!Route::is('pages.home') && !Route::is('pages.featured_creators'))
                    <form action="/categories/search?q=" method="GET" role="search">
                        <div class="flex flex-row border rounded-3xl" :class="!scrolledFromTop ? 'border-white' : 'border-glacier-900'">
                            <input type="text" :class="!scrolledFromTop ? 'px-4 py-2 text-white bg-transparent placeholder-white focus:ring-0 focus:outline-none' : 'px-4 py-2 text-glacier-900 bg-transparent placeholder-glacier-900 focus:ring-0 focus:outline-none'" placeholder="Search..." value="" name="q">
                            <button type="submit" class="px-4" :class="!scrolledFromTop ? 'text-white' : 'text-glacier-900'">
                                <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                @endif
                <a href="{{ route('pages.home') }}" class="hover:underline">{{ __('navigation.home') }}</a>
                <a href="{{ route('categories.index') }}" class="hover:underline">{{ __('navigation.categories') }}</a>
                <a href="{{ route('pages.about_us') }}" class="hover:underline">{{ __('navigation.about_us') }}</a>
                <a href="{{ route('blog.index') }}" class="hover:underline">{{ __('navigation.blog') }}</a>
                @auth
                    <x-ui.dropdown>
                        <x-slot name="child">
                            <x-ui.avatar src="{{ Auth::user()->avatar()?->getFullUrl('avatar') }}" class="w-8 rounded-full" />
                        </x-slot>
                        <x-slot name="menu">
                            <div class="flex flex-col items-stretch">
                                @if(auth()->user()->type === 'creator')
                                    <a href="{{ route('creator_dashboard.index') }}" class="py-2 px-4 hover:bg-glacier-100">Creator dashboard</a>
                                    <a href="{{ route('checkout.my_plan') }}" class="py-2 px-4 hover:bg-glacier-100">My plan</a>
                                @endif
                                <a href="{{ route('auth.settings') }}" class="py-2 px-4 hover:bg-glacier-100">Settings</a>
                                <a href="{{ route('auth.logout') }}" class="py-2 px-4 hover:bg-glacier-100">Logout</a>
                            </div>
                        </x-slot>
                    </x-ui.dropdown>
                @endauth
                @guest
                    <a href="{{ route('auth.login') }}">{{ __('navigation.login') }}</a>
                @endguest
                @if (Route::current()->name === 'pages.creators')
                    <a href="{{ route('pages.creators') }}" class="hover:underline">{{ __('navigation.for_creators') }}</a>
                @else
                    <a href="{{ route('pages.creators') }}" class="py-[4px] px-12 rounded-2xl"
                        :class="{'bg-white text-chantilly-500': !scrolledFromTop, 'bg-chantilly-500 text-white': scrolledFromTop}">
                        {{ __('navigation.for_onlyfans_creators') }}
                    </a>
                @endif
            </div>
            <div
                class="block lg:hidden border-2 rounded-full p-2"
                :class="{'text-white border-white': !scrolledFromTop, 'text-chantilly-500 border-chantilly-500': scrolledFromTop}"
                x-on:click="navOpen = !navOpen"
            >
                <x-icons.menu class="w-6" />
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
