<!DOCTYPE html>
<html>
<head>
    <title>Page Not Found</title>
    <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'>
    <style>
        @font-face {
            font-family: "Canela";
            src: local("Canela-Black"),
            url("{{ asset('fonts/Canela/subset-Canela-Black.woff2') }}") format("woff2"),
            url("{{ asset('fonts/Canela/subset-Canela-Black.woff') }}") format("woff");
            font-weight: 800;
            font-display: block;
        }

        @font-face {
            font-family: "Canela";
            src: local("Canela-Bold"),
            url("{{ asset('fonts/Canela/subset-Canela-Bold.woff2') }}") format("woff2"),
            url("{{ asset('fonts/Canela/subset-Canela-Bold.woff') }}") format("woff");
            font-weight: 700;
            font-display: block;
        }

        @font-face {
            font-family: "Canela";
            src: local("Canela-Medium"),
            url("{{ asset('fonts/Canela/subset-Canela-Medium.woff2') }}") format("woff2"),
            url("{{ asset('fonts/Canela/subset-Canela-Medium.woff') }}") format("woff");
            font-weight: 500;
            font-display: block;
        }

        @font-face {
            font-family: "Canela";
            src: local("Canela-Regular"),
            url("{{ asset('fonts/Canela/subset-Canela-Regular.woff2') }}") format("woff2"),
            url("{{ asset('fonts/Canela/subset-Canela-Regular.woff2') }}") format("woff");
            font-weight: 400;
            font-display: block;
        }
        body {
            font-family: 'Raleway', sans-serif;
        }
        .custom-error-404 img {
            max-width: 100px;
            height: auto;
        }
        .custom-error-404 header {
            padding: 19px 15px;
            max-width: 1280px;
            width: 100%;
            margin: auto;
            box-sizing: border-box;
        }
        .custom-error-404 .container.error-container {
            padding: 30px 15px 0;
            max-width: 1280px;
            width: 100%;
            margin: auto;
            box-sizing: border-box;
        }
        .custom-error-404 .error-container .text-center {
            text-align: center;
        }
        .custom-error-404 .custom-sub-tittle {
            /*font-family: var(--chakra-fonts-body); */
            font-size: 26px;
            color: #80cae5;
            font-weight: normal;
            margin: 0;
        }
        .custom-error-404 h1.big-text {
            font-family: 'Canela', serif;
            font-weight: bold;
            font-size: 60px;
            color: #000000;
            margin: 0 0 8px;
            line-height: normal;
        }
        .custom-error-404 .custom-banner-404 img {
            max-width: 931px;
        }
        .custom-error-404 h2.small-text {
            width: 100%;
            -js-display: flex;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-flow: row wrap;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;
            font-family: 'Canela', serif;
            font-weight: bold;
            font-size: 50px;
            color: #000000;
            margin: 30px 0 0 0;
            line-height: normal;
        }
        .custom-error-404 h2 a.back-to-home {
            border: 1px solid #000;
            font-family: 'Canela', serif;
            font-size: 20px;
            color: #000;
            text-decoration: none;
            padding: 18px 35px 12px;
            margin: 0 8px;
            position: relative;
            overflow: hidden;
            box-shadow: 6px 6px 0 -1px #000;
        }
        .custom-error-404 h2 a.back-to-home:before {
            content: "";
            background: #80cae5;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            border-left: 5px solid #fff;
            border-top: 6px solid #fff;
        }
        .custom-error-404 .social-icon li svg, .custom-error-404 .social-icon li path {
            color: #000;
            font-size: 32px;
        }
        .custom-error-404 .social-icon li a img {
            max-width: 28px;
            height: auto;
        }
        .custom-error-404 .social-icon ul.css-1jrzofu {
            margin: 55px 0 70px 0;
            padding: 0;
        }
        .custom-error-404 .social-icon li {
            list-style: none;
            display: inline-block;
            vertical-align: middle;
            padding: 0 30px;
        }
        @media (max-width:991px) {
            .custom-error-404 .custom-banner-404 img {
                width:100%;
            }
        }
        @media (max-width:767px) {
            .custom-error-404 .custom-sub-tittle {
                font-size:20px;
            }
            .custom-error-404 h1.big-text {
                font-size:40px;
            }
            .custom-error-404 h2.small-text {
                font-size: 30px;
            }
            .custom-error-404 .social-icon li {
                padding: 0 20px;
            }
        }
        @media(max-width:549px) {
            .custom-error-404 h2 a.back-to-home {
                padding: 18px 20px 12px;
            }
        }
    </style>
</head>
<body class="custom-error-404">
    <header>
        <div class="col-md-12">
            <img src="/images/logo/gradient-lg.png" alt="logo">
        </div>
    </header>
    <div class="container error-container">
        <div class="row">
            <div class="col-md-12 text-center custom-banner-404">
                <p class="custom-sub-tittle">Oops...so sorry, it seems</p>
                <h1 class="big-text">We’ve got an issue</h1>
                <img src="/images/404-banner.png" alt="banner">
                <h2 class="small-text">Let's <a class="back-to-home" href="{{ url('/') }}">Go Home</a> for now.</h2>
            </div>
            <div class="col-md-6  text-center social-icon">
                <ul role="list" class="css-1jrzofu">
                    <li class="css-0">
                        <a target="_blank" class="chakra-link css-12aba8c" href="https://www.instagram.com/privy.reviews">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" focusable="false" class="chakra-icon css-2ss2pw" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                                <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                            </svg>
                        </a>
                    </li>
                    <li class="css-0">
                        <a target="_blank" class="chakra-link css-12aba8c" href="https://www.facebook.com/Privy-112660107590159">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" focusable="false" class="chakra-icon css-2ss2pw" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"></path>
                            </svg>
                        </a>
                    </li>
                    <li class="css-0">
                        <a target="_blank" class="chakra-link css-12aba8c" href="https://twitter.com/Privy_Reviews">
                            <img src="/images/Archive/email.png" alt="email">
                        </a>
                    </li>
                    <li class="css-0">
                        <a target="_blank" class="chakra-link css-12aba8c" href="https://twitter.com/Privy_Reviews">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" focusable="false" class="chakra-icon css-2ss2pw" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</body>
</html>


