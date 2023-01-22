<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="description" content="{{ nova_get_setting('meta_description') }}" />
    <meta name="keywords" content="{{ nova_get_setting('meta_keywords') }}" />
    <meta name="theme-color" content="#80cae5">
    <title>{{ $title }}</title>
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ $title }}" />
    <meta property="og:description" content="{{ nova_get_setting('meta_description') }}" />
    <meta property="og:url" content="{{ url('/') }}" />
    <meta property="og:image" content="{{ asset('/images/logo/gradient-sm.png') }}" />
    <link rel="alternate" href="{{ url('/') }}" hreflang="en-US" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="preconnect" href="//fonts.gstatic.com/" crossorigin>
    <link rel="preconnect" href="//unpkg.com" crossorigin>
    <link href="{{ asset('css/app.v2.css') }}" rel="stylesheet">
    <script src="//unpkg.com/@popperjs/core@2"></script>
    <script defer src="//unpkg.com/alpinejs"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
	
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    @livewireStyles
    @include('snippets/head')
</head>

<body
    x-data="{navOpen: false, scrolledFromTop: false}"
    x-init="window.pageYOffset >= 50 ? scrolledFromTop = true : scrolledFromTop = false"
    @scroll.window="window.pageYOffset >= 50 ? scrolledFromTop = true : scrolledFromTop = false"
    :class="{}" >
     <!-- Google Tag Manager (noscript) -->
     <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T99LMR9"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <x-ui.preloader />

    <main>
        {{ $slot }}
    </main>


    <script src="{{ asset('js/lazyload.js') }}"></script>
    <script src="{{ asset('js/preloader.js') }}"></script>
    <script>
        var cb = function cb() {
            var l = document.createElement('link');
            l.rel = 'stylesheet';
            l.href = '//fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap';
            var h = document.getElementsByTagName('head')[0];
            h.parentNode.insertBefore(l, h);
        };
        var raf =
            requestAnimationFrame ||
            mozRequestAnimationFrame ||
            webkitRequestAnimationFrame ||
            msRequestAnimationFrame;
        if (raf) raf(cb);
        else window.addEventListener('load', cb);
    </script>
    @livewireScripts
    @include('snippets/body')
</body>

</html>
