<footer class="bg-white pt-8 pb-4 border-t border-glacier-500 border-opacity-20">
    <x-ui.container>
        <div class="flex flex-col items-start space-y-16">
            <div class="flex flex-col space-y-8 lg:flex-row lg:space-y-0 items-start justify-between font-medium w-full">
                <div class="flex flex-col space-y-2 text-gray-400 text-lg w-full lg:w-[30%]">
                    <p class="font-semibold text-black text-xl pb-1">
                        {{ __('footer.about.title') }}
                    </p>
                    <a href="{{ route('pages.about_us') }}" class="hover:underline">
                        {{ __('footer.about.about_us') }}
                    </a>
                    <a href="{{ route('blog.index') }}" class="hover:underline">
                        {{ __('footer.about.blog') }}
                    </a>
                    <a href="{{ route('pages.trust_in_reviews') }}" class="hover:underline">
                        {{ __('footer.about.trust_in_reviews') }}
                    </a>
                    <a href="{{ nova_get_setting('contact_us_url') }}" rel="noreferrer" target="_blank" class="hover:underline">
                        {{ __('footer.about.contact_us') }}
                    </a>
                </div>
                <div class="flex flex-col space-y-2 text-gray-400 text-lg w-full lg:w-[30%]">
                    <p class="font-semibold text-black text-xl pb-1">
                        {{ __('footer.community.title') }}
                    </p>
                    <a href="{{ route('users.view', 'privyreviews') }}" class="hover:underline">
                        {{ __('footer.community.leave_a_review') }}
                    </a>
                    <a href="{{ nova_get_setting('help_centre_url') }}" rel="noreferrer" target="_blank" class="hover:underline">
                        {{ __('footer.community.support') }}
                    </a>
                    <a href="{{ route('auth.register') }}" class="hover:underline">
                        {{ __('footer.community.sign_up') }}
                    </a>
                    <a href="{{ route('auth.login') }}" class="hover:underline">
                        {{ __('footer.community.login') }}
                    </a>
                </div>
                <div class="flex flex-col space-y-2 text-gray-400 text-lg w-full lg:w-[30%]">
                    <p class="font-semibold text-black text-xl pb-1">
                        {{ __('footer.onlyfans_creators.title') }}
                    </p>
                    <a href="{{ route('pages.creators') }}" class="hover:underline">
                        {{ __('footer.onlyfans_creators.for_creators') }}
                    </a>
                    <a href="{{ route('pages.plans_and_pricing') }}" class="hover:underline">
                        {{ __('footer.onlyfans_creators.plans_and_pricing') }}
                    </a>
                    <a href="{{ route('auth.register') }}" class="hover:underline">
                        {{ __('footer.onlyfans_creators.sign_up') }}
                    </a>
                    <a href="{{ route('auth.login') }}" class="hover:underline">
                        {{ __('footer.onlyfans_creators.login') }}
                    </a>
                </div>
                <div class="flex flex-col space-y-6 text-gray-400 text-lg w-full lg:w-[30%]">
                    <p class="font-semibold text-black text-xl pb-1">{{ __('footer.follow_us.title') }}</p>
                    <a href="{{ nova_get_setting('instagram_url') }}" rel="noreferrer" target="_blank" class="hover:underline">
                        <x-icons.social.instagram class="w-4 text-glacier-600" />
                    </a>
                    <a href="{{ nova_get_setting('twitter_url') }}" rel="noreferrer" target="_blank" class="hover:underline">
                        <x-icons.social.twitter class="w-4 text-glacier-600" />
                    </a>
                    <a href="{{ nova_get_setting('facebook_url') }}" rel="noreferrer" target="_blank" class="hover:underline">
                        <x-icons.social.facebook class="w-4 text-glacier-600" />
                    </a>
                    <a href="{{ nova_get_setting('youtube_url') }}" rel="noreferrer" target="_blank" class="hover:underline">
                        <x-icons.social.youtube class="w-4 text-glacier-600" />
                    </a>
                    <a href="{{ nova_get_setting('tiktok_url') }}" rel="noreferrer" target="_blank" class="hover:underline">
                        <x-icons.social.tiktok class="w-4 text-glacier-600" />
                    </a>
                    <a href="{{ nova_get_setting('discord_url') }}" rel="noreferrer" target="_blank" class="hover:underline">
                        <x-icons.social.discord class="w-4 text-glacier-600" />
                    </a>
                </div>
                <div class="flex flex-col space-y-2 text-gray-400 text-lg w-full lg:w-[30%]">
                    <p class="font-semibold text-black text-xl pb-1">{{ __('footer.language.title') }}</p>
                    <livewire:ui.language-select />
                </div>
            </div>
            <div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row justify-between w-full">
                <img src="{{ asset('images/logo/gradient-lg.png') }}" class="w-28" alt="Privy logo" />
                <div class="flex flex-col space-y-4 lg:flex-row items-start lg:space-y-0 lg:space-x-12 font-medium text-gray-400">
                    <a href="{{ nova_get_setting('legal_url') }}" rel="noreferrer" target="_blank" class="hover:underline">
                        {{ __('footer.legal') }}
                    </a>
                    <a href="{{ route('pages.privacy_policy') }}" class="hover:underline">
                        {{ __('footer.privacy_policy') }}</a>
                    <a href="{{ route('pages.terms_and_conditions') }}" class="hover:underline">
                        {{ __('footer.terms_and_conditions') }}
                    </a>
                    <a href="{{ nova_get_setting('guidelines_for_reviewers_url') }}" rel="noreferrer" target="_blank" class="hover:underline">
                        {{ __('footer.guidelines_for_reviewers') }}
                    </a>
                </div>
            </div>
        </div>
    </x-ui.container>
</footer>
