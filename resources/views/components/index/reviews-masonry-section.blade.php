@props(['subheading', 'heading', 'reviews'])
<div class="bg-glacier-100 py-12">
    <x-ui.container>
        <div class="flex flex-col justify-center items-center space-y-12">
            <div class="flex flex-col space-y-6 text-center">
                {!! $subheading !!}
                {!! $heading !!}
            </div>
            <div class="md:masonry-2-col xl:masonry-4-col masonry-y-gap box-border mx-auto before:box-inherit after:box-inherit w-full">
                @foreach ($reviews as $review)
                    <div class="bg-white text-gray-500 p-8 rounded-md">
                        <div class="flex flex-col space-y-4">
                            <p>{{ $review->description }}</p>
                            <div class="flex flex-row space-x-1">
                                <x-ui.stars :rating="$review->rating" class="w-7" />
                            </div>
                            <div class="flex flex-row items-center space-x-6">
                                <x-ui.lazy-avatar src="{{ $review->reviewer->avatar()?->getFullUrl('avatar') }}" alt="{{ $review->reviewer->username }}'s avatar" class="w-12 rounded-full" />
                                <div class="flex flex-col">
                                    <p class="font-semibold text-xl text-black">{{ $review->reviewer->username }}</p>
                                    <a href="{{ route('users.view', $review->creator->username) }}"><p class="text-sm"> {{ __('home.reviews_masonry.reviewed', ['name' => $review->creator->username]) }} </p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </x-ui.container>
</div>
