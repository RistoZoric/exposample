@props(['child', 'menu'])
<div
    x-id="['dropdown']"
    x-data="{ open: false }"
    @click.away="open = false"
    @scroll.window="open = false"
    class="relative">
    <div
        x-on:click="open = !open"
        x-ref="child"
        x-effect="Popper.createPopper($refs.child, $refs.menu, {
            placement: 'right-end',
            strategy: 'fixed',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [10, 0],
                },
              },
              {
                name: 'computeStyles',
                options: {
                  adaptive: false, // true by default
                },
              },
            ],
          })"
        class="cursor-pointer">
        {{ $child }}
    </div>
    <div
        x-show="open"
        x-ref="menu"
        x-cloak
        class="fixed bg-white rounded-lg shadow-md text-black font-semibold overflow-hidden py-2">
        {{ $menu }}
    </div>
</div>
