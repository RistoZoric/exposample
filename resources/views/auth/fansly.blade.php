<x-layout title="{{ __('register.fansly_verify') }}">
    <div class="bg-half">
        <x-ui.nav1 />
        <x-ui.container>
            <div class="flex flex-col py-12">
                <x-auth.form-center
                    heading="{{ __('register.fansly_verify') }}"
                    subheading="{{ __('login.subtitle') }}"
                    action="{{ url('fansly/callback') }}">
                    <div class="flex flex-col space-y-2 pt-4">
                        <x-auth.input type="text" name="email" placeholder="{{ __('login.email') }}" />
                        @error('email')
                            <span class="text-sm text-chantilly-800 self-start py-2">{{ $message }}</span>
                        @enderror
                        <x-auth.input type="password" name="password" placeholder="{{ __('login.password') }}" />
                        @error('password')
                            <span class="text-sm text-chantilly-800 self-start py-2">{{ $message }}</span>
                            @enderror
                    </div>
                    <div class="flex flex-col lg:flex-row space-y-2 lg:space-x-2 lg:space-y-0 pt-8">
                        <x-auth.action-button-submit text="{{ __('login.login') }}" class="bg-chantilly-500 text-white shadow-sm shadow-chantilly-500/30" />
                    </div>
                </x-auth.form-center>
            </div>
        </x-ui.container>
    </div>
    <x-ui.footer />
</x-layout>
