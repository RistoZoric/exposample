import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: 'Canela';
        src: url('/fonts/Canela/subset-Canela-Black.woff2') format('woff2'),
            url('/fonts/Canela/subset-Canela-Black.woff') format('woff');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Canela';
        src: url('/fonts/Canela/subset-Canela-Bold.woff2') format('woff2'),
            url('/fonts/Canela/subset-Canela-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Canela';
        src: url('/fonts/Canela/subset-Canela-BlackItalic.woff2') format('woff2'),
            url('/fonts/Canela/subset-Canela-BlackItalic.woff') format('woff');
        font-weight: 900;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Canela';
        src: url('/fonts/Canela/subset-Canela-Regular.woff2') format('woff2'),
            url('/fonts/Canela/subset-Canela-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Canela';
        src: url('/fonts/Canela/subset-Canela-BoldItalic.woff2') format('woff2'),
            url('/fonts/Canela/subset-Canela-BoldItalic.woff') format('woff');
        font-weight: bold;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Canela';
        src: url('/fonts/Canela/subset-Canela-RegularItalic.woff2') format('woff2'),
            url('/fonts/Canela/subset-Canela-RegularItalic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Canela';
        src: url('/fonts/Canela/subset-Canela-LightItalic.woff2') format('woff2'),
            url('/fonts/Canela/subset-Canela-LightItalic.woff') format('woff');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Canela';
        src: url('/fonts/Canela/subset-Canela-Thin.woff2') format('woff2'),
            url('/fonts/Canela/subset-Canela-Thin.woff') format('woff');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Canela';
        src: url('/fonts/Canela/subset-Canela-Light.woff2') format('woff2'),
            url('/fonts/Canela/subset-Canela-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Canela';
        src: url('/fonts/Canela/subset-Canela-MediumItalic.woff2') format('woff2'),
            url('/fonts/Canela/subset-Canela-MediumItalic.woff') format('woff');
        font-weight: 500;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Canela';
        src: url('/fonts/Canela/subset-Canela-ThinItalic.woff2') format('woff2'),
            url('/fonts/Canela/subset-Canela-ThinItalic.woff') format('woff');
        font-weight: 100;
        font-style: italic;
        font-display: swap;
    }
    @font-face {
        font-family: 'Canela';
        src: url('/fonts/Canela/subset-Canela-Medium.woff2') format('woff2'),
            url('/fonts/Canela/subset-Canela-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
   `}
  />
);

export default Fonts;
