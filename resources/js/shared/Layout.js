import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Inertia } from '@inertiajs/inertia';
import CookieConsent from 'react-cookie-consent';

import {
  ChakraProvider,
  extendTheme,
  Link
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

import { usePage, InertiaLink} from '@inertiajs/inertia-react';
import { closeMobileMenu } from '@/slices/globalSlice';
import store from '@/utils/store';
import Fonts from '@/shared/Fonts';
import useLang from '@/utils/useLang';

import PromoModal from '@/components/UI/PromoModal';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  breakpoints,
  styles: {
    global: {
      body: {
        height: '100%',
        color: 'black',
        background: '#fff',
      },
    },
  },
  fonts: {
    body: 'Raleway',
  },
  colors: {
    chantilly: {
      800: '#ff5f40',
      700: '#ff7559',
      600: '#ff8a73',
      500: '#ffb8aa',
      400: '#ffb4a6',
      300: '#ffcabf',
      200: '#ffdfd9',
      100: '#fff6f5',
      50: '#ffb8aa1A',
    },
    glacier: {
      900: '#80CAE5',
      800: '#1c6c8a',
      700: '#258eb4',
      600: '#4bb4da',
      500: '#80CAE5',
      400: '#90c8e3',
      300: '#b3d9ec',
      200: '#c3e1f0',
      100: '#e7f3f9',
    },
    green: {
      50: '#F0FFF4',
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#67c288',
      600: '#2F855A',
      700: '#276749',
      800: '#22543D',
      900: '#1C4532',
    },
    facebook: '#4267B2',
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            _focus: {
              borderColor: '#60bdde',
              boxShadow: '0 0 0 1px #60bdde',
            },
          },
        },
      },
    },
    Select: {
      variants: {
        outline: {
          field: {
            _focus: {
              borderColor: '#60bdde',
              boxShadow: '0 0 0 1px #60bdde',
            },
          },
        },
      },
    },
  },
});

const consentStyle = {
  background: theme.colors.gray[900],
  zIndex: '999999',
};

const consentButtonStyle = {
  width: '100px',
  color: theme.colors.white,
  background: theme.colors.glacier[500],
  borderRadius: '12px',
  fontSize: '14px',
  fontWeight: '600',
};

export default function Layout({ children }) {
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  useEffect(() => Inertia.on('navigate', () => {
    store.dispatch(closeMobileMenu());
  }), []);

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Provider store={store}>
        {children}
      </Provider>
      {/* <PromoModal /> */}
      <CookieConsent
        location="bottom"
        buttonText={lang.get('consent.button')}
        cookieName="privy-consent"
        style={consentStyle}
        buttonStyle={consentButtonStyle}
        expires={150}
      >
        Hi! We just wanted to let you know our platform uses cookies to enhance your experience and improve the quality of our site. By clicking "Accept", you're agreeing to the placement and use of cookies as described in our <Link as={InertiaLink}
          href="/privacy-policy">
        "{lang.get('footer.privacy_policy')}"
      </Link>
      . Thanks for reading.
      </CookieConsent>
    </ChakraProvider>
  );
}
