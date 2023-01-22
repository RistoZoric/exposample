@props(['review'])
<div class="bg-glacier-500 text-white py-12">
    <x-ui.container>
        <div class="flex flex-col lg:flex-row lg:justify-between items-center space-y-12 lg:space-y-0">
            <div class="w-full lg:w-3/5">
                <div class="flex flex-col space-y-6">
                    <h2 class="font-canela font-bold text-4xl lg:text-5.5xl lg:leading-snug">{!! __('home.highlighted_review.title') !!}</h2>
                    <x-icons.quote class="h-8" />
                    <p class="text-lg">{{$review->description}}</p>
                    <div class="flex flex-row space-x-1">
                        <x-ui.stars :rating="$review->rating" class="w-10" />
                    </div>
                    <div class="flex flex-row items-center space-x-6">
                        <x-ui.lazy-avatar src="{{ $review->reviewer->avatar()?->getFullUrl('avatar') }}" alt="{{ $review->reviewer->username }}'s avatar" class="w-12 rounded-xl" />
                        <div class="flex flex-col">
                            <p class="font-semibold text-xl">{{ $review->reviewer->username }}</p>
                            <a href="{{ route('users.view', $review->creator->username) }}"><p class="text-sm"> {{ __('home.reviews_masonry.reviewed', ['name' => $review->creator->username]) }} </p></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden lg:block lg:w-1/3">
                <img data-src="{{ asset('images/reviews.png') }}" class="lazy w-full rounded-2xl object-cover" alt="Rectangles with people" />
            </div>
        </div>
    </x-ui.container>
</div>
