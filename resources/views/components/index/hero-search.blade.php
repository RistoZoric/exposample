<div class="relative text-black">
    <div x-data="{ open: false }" @click.away="open = false">
        <input
            type="text"
            placeholder="{{ __('home.search_placeholder') }}"
            class="bg-white rounded-xl px-8 h-20 w-full text-lg focus:outline-none" wire:model="query"
            @input.debounce="open = true" wire:keydown.enter
            />
        <div
            x-show="open"
            x-cloak
            x-transition
            class="absolute bg-white rounded-b-xl shadow-md w-full -mt-2 border-t border-glacier-100">
            <div wire:loading.block>
                <div class="flex flex-col justify-center items-center py-4">
                    <x-ui.loading-spinner class="h-8" />
                </div>
            </div>
            <div wire:loading.remove>
                @if ($query !== '')
                    <div class="flex flex-col">
                        @if ($users->isEmpty())
                            <div class="text-md px-8 py-5">
                                {{ __('home.search_no_results') }}
                            </div>
                        @else
                            @foreach ($users as $user)
                                <a href="{{ route('users.view', $user->username) }}">
                                    <div class="flex flex-row items-center justify-between px-8 py-3 hover:bg-glacier-100 border-b border-glacier-100 transition-all">
                                        <div class="flex flex-row items-center space-x-6">
                                            <x-ui.avatar src="{{ $user->avatar()?->getFullUrl('avatar') }}" class="w-10 rounded-full" />
                                            <p class="text-md font-semibold">{{ $user->username }}</p>
                                        </div>
                                        <x-icons.chevron-right class="h-6 w-6 text-gray-500" />
                                    </div>
                                </a>
                            @endforeach
                        @endif
                    </div>
                @endif
            </div>
        </div>
    </div>
</div>
