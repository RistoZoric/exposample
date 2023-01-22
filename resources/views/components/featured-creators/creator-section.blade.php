@props(['creators'])
<div class="flex flex-col items-center space-y-12 py-16 w-full">
    @foreach($creators as $creator)
        <div class="flex flex-col lg:flex-row items-center w-full">
            @if($loop->iteration % 2)
                <img data-src="{{ $creator->avatar()?->getFullUrl('avatar') }}" class="lazy w-full lg:w-1/2 h-60 lg:h-96 object-cover object-top rounded-3xl"/>
                <div class="flex flex-col space-y-4 bg-glacier-100 rounded-xl lg:rounded-bl-none lg:rounded-tl-none p-8 w-full text-center lg:text-left lg:w-1/2">
                    <div class="flex flex-col space-y-1">
                        <p class="font-semibold text-xl text-glacier-900">{{ '@'. $creator->username }}</p>
                        <p class="text-sm text-glacier-900">{{ __('featured_creators.creator') }}</p>
                    </div>
                    <p class="text-base text-glacier-900">
                        Get noticed on our <b>“Featured Creators”</b> page.
                        With <b>thousands of organic hits per month</b>, your profile and content are <b>sure to be discovered here</b>.
                        Upgrade your plan to our <b>“Premium”</b> plan and get features like being <b>featured here</b>, <b>VIP support</b>, <b>audience analytics</b>, and so much more.
                    </p>
                    <a href="{{ route('users.view', $creator->username) }}" class="bg-transparent hover:bg-glacier-200 py-2 px-6 font-bold text-glacier-500 text-sm uppercase border-2 border-glacier-500 w-full lg:w-max transition-all">
                        {{ __('featured_creators.button') }}
                    </a>
                </div>
            @else
                <div class="flex flex-col space-y-4 bg-glacier-100 rounded-xl lg:rounded-br-none lg:rounded-tr-none p-8 w-full text-center lg:text-left lg:w-1/2">
                    <div class="flex flex-col space-y-1">
                        <p class="font-semibold text-xl text-glacier-900">{{ '@'. $creator->username }}</p>
                        <p class="text-sm text-glacier-900">{{ __('featured_creators.creator') }}</p>
                    </div>
                    <p class="text-base text-glacier-900">
                        Get noticed on our <b>“Featured Creators”</b> page.
                        With <b>thousands of organic hits per month</b>, your profile and content are <b>sure to be discovered here</b>.
                        Upgrade your plan to our <b>“Premium”</b> plan and get features like being <b>featured here</b>, <b>VIP support</b>, <b>audience analytics</b>, and so much more.
                    </p>
                    <a href="{{ route('users.view', $creator->username) }}" class="bg-transparent hover:bg-glacier-200 py-2 px-6 font-bold text-glacier-500 text-sm uppercase border-2 border-glacier-500 w-full lg:w-max transition-all">
                        {{ __('featured_creators.button') }}
                    </a>
                </div>
                <img data-src="{{ $creator->avatar()?->getFullUrl('avatar') }}" class="lazy w-full lg:w-1/2 h-60 lg:h-96 object-cover object-center rounded-3xl"/>
            @endif
        </div>
    @endforeach{{----}}
</div>
