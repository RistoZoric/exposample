<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en-US" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <link href="//fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet"/>
    <title></title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style type="text/css">
        /* CLIENT-SPECIFIC STYLES */
        body, table, td, a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        /* RESET STYLES */
        img {
            border: 0;
            outline: none;
            text-decoration: none;
        }

        table {
            border-collapse: collapse !important;
        }

        body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
        }

        /* iOS BLUE LINKS */
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .wrapper {
            width: 640px !important;
            padding: 0 !important;
            margin: 0 !important;
        }

        .body {
            width: 100% !important;
        }

        /* MEDIA QUERIES */
        @media all and (max-width: 639px) {
            .wrapper {
                width: 100% !important;
            }

            .body {
                padding-left: 16px !important;
                padding-right: 16px !important;
            }
        }
    </style>
    <style type="text/css">
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
            url("{{ asset('fonts/Canela/subset-Canela-Medium.woff ') }}") format("woff");
            font-weight: 500;
            font-display: block;
        }

        @font-face {
            font-family: "Canela";
            src: local("Canela-Regular"),
            url("{{ asset('fonts/Canela/subset-Canela-Regular.woff2') }}") format("woff2"),
            url("{{ asset('fonts/Canela/subset-Canela-Regular.woff') }}") format("woff");
            font-weight: 400;
            font-display: block;
        }

        body {
            font-family: 'Raleway', sans-serif;
        }

        img.logo {
            width: 150px;
        }

        @media screen and (max-width:600px) {
            img.logo {
                width: 75px;
            }
        }

        h1, h2 {
            margin: 0;
            font-family: 'Canela', serif;
        }

        h1 {
            color: black;
            font-size: 32px;
        }

        h2 {
            font-size: 22px;
        }

        .btn {
            color: white;
            font-weight: 700;
            text-decoration: none;
            width: 60px;
            height: 30px;
            padding: 10px 20px;
            border-radius: 15px;
        }

        .btn-chantilly {
            background-color: #80cae5;
        }

        .btn-black {
            background-color: #000;
        }

        img.avatar {
            width: 70px;
            border-radius: 50%;
            padding-right: 5px;
        }

        @media screen and (max-width:600px) {
            img.avatar {
                width: 35px;
                border-radius: 50%;
                padding-right: 5px;
            }
        }

        .padding-y {
            padding-top: 20px;
            padding-bottom: 20px;
        }

        .padding-t-15 {
            padding-top: 15px;
        }

        .padding-t-20 {
            padding-top: 30px;
        }

        .padding-b-20 {
            padding-bottom: 20px;
        }

        .padding-t-30 {
            padding-top: 30px;
        }

        .rounded-t {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .rounded-b {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    </style>
</head>
<body>
<table cellpadding="0" cellspacing="0" border="0" class="wrapper">
    <tr>
        <td height="10" style="font-size:10px; line-height:10px;">&nbsp;</td>
    </tr>
    <tr>
        <td align="center" valign="top">
            <table width="600" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td align="center" valign="middle"  bgcolor="#ffdfd9" class="padding-t-20 rounded-t">
                        <img src="{{ asset('images/logo/gradient-lg.png') }}" class="logo"/>
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top" bgcolor="#ffdfd9" class="body padding-y">
                        <h1>Nice to meet you!</h1>
                        <p>Click on the button below to verify your account.</p>
                        <div class="padding-y padding-t-15">
                            <a href="{{ route('auth.verify.email', [$user->verification_code]) }}" class="btn btn-chantilly">Verify me</a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top" bgcolor="#b3dfef" class="padding-y rounded-b">
                        <h2 class="padding-b-20">Explore our top creators</h2>
                        <div>
                            @foreach($creators as $creator)
                                <img src="{{ $creator->avatar()->getFullUrl('avatar') }}" class="avatar" />
                            @endforeach
                        </div>
                        <div class="padding-y padding-t-30">
                            <a href="{{ route('categories.index') }}" class="btn btn-black">Learn more</a>
                        </div>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td height="10" style="font-size:10px; line-height:10px;">&nbsp;</td>
    </tr>
</table>
</body>
</html>
