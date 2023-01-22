<x-layout title="{{ __('register.meta_title') }}">
    <div class="bg-half">
        <x-ui.nav1 />
        <x-ui.container>
            <div class="flex flex-col py-12">
                <x-auth.form-center
                    heading="{{ __('register.title') }}"
                    subheading="{{ __('register.subtitle') }}"
                    action="{{ route('auth.register') }}">
                    <div class="flex flex-col space-y-2 pt-4">
                        <x-auth.input type="text" name="username" placeholder="{{ __('register.username') }}" value="{{ old('username') }}" />
                        @error('username')
                            <span class="text-sm text-chantilly-800 self-start py-2">{{ $message }}</span>
                        @enderror
                        <x-auth.input type="email" name="email" placeholder="{{ __('register.email') }}" value="{{ old('email') }}" />
                        @error('email')
                            <span class="text-sm text-chantilly-800 self-start py-2">{{ $message }}</span>
                        @enderror
                        <x-auth.input type="password" name="password" placeholder="{{ __('register.password') }}" />
                        @error('password')
                            <span class="text-sm text-chantilly-800 self-start py-2">{{ $message }}</span>
                        @enderror
                        <x-auth.input type="password" name="password_confirmation" placeholder="{{ __('register.confirm_password') }}" />
                        @error('password_confirmation')
                            <span class="text-sm text-chantilly-800 self-start py-2">{{ $message }}</span>
                        @enderror
                        <input type="hidden" id="patreonVerifyInput"  name="patreon_verified" value="false">
                        <input type="hidden" id="patreonUsername"  name="patreon_username" value="">
                        <input type="hidden" id="twitchVerifyInput"  name="twitch_verified" value="false">
                        <input type="hidden" id="twitchUsername"  name="twitch_username" value="">
                    </div>
                    <div class="flex flex-col lg:flex-row space-y-2 lg:space-x-2 lg:space-y-0 pt-4">
                        <x-auth.facebook-button href="{{ route('auth.facebook.redirect') }}" />
                        <x-auth.google-button href="{{ route('auth.google.redirect') }}" />
                    </div>
                    <div class="flex flex-col lg:flex-row space-y-2 lg:space-x-2 lg:space-y-0 pt-8">
                        <x-auth.action-button-submit text="{{ __('register.register') }}" class="bg-chantilly-500 text-white shadow-sm shadow-chantilly-500/30" />
                        <x-auth.action-button-link href="{{ route('auth.login') }}" text="{{ __('register.login') }}"
                            class="bg-white text-chantilly-500 shadow-sm shadow-glacier-500/30 border-2 border-chantilly-500" />
                    </div>
                </x-auth.form-center>
            </div>
        </x-ui.container>
    </div>
    <x-ui.footer />
</x-layout>
