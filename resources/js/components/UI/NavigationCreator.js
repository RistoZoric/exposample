import {
    Button,
    Flex,
    Link,
    Box,
    Text,
    Container,
    Image,
    HStack,
    useBreakpointValue,
    Menu,
    MenuList,
    MenuButton, MenuItem, Avatar, AvatarBadge,
    FormControl,
    Input,
    InputGroup,
    InputRightElement,
  } from '@chakra-ui/react';
  import { SearchIcon } from '@chakra-ui/icons';
  import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  import { useEffect, useState } from 'react';
  import useRoutes from '@/utils/useRoutes';
  import useLang from '@/utils/useLang';

  export default function NavigationCreator({
    isMobileMenuOpen, onToggle, scheme, btnScheme, textColor, logo, boxShadow = 'none', context = 'reviewer',
  }) {

    const [isSticky, setIsSticky] = useState(false);
    const logoVariant = useBreakpointValue({ base: `/images/logo/${logo}-lg.png`, xl: `/images/logo/${logo}-lg.png` });
    const stickyLogoVariant = useBreakpointValue({ base: '/images/logo/gradient-lg.png', xl: '/images/logo/gradient-lg.png' });
    const { authUser } = usePage().props;
    const { locale } = usePage().props;
    const lang = useLang(locale);
  lang.setFallback("en");
    const route = useRoutes();

    const {
      data, setData, get, processing, errors,
    } = useForm({
      q: '',
    });

    function handleSearch(event) {
      event.preventDefault();
      get(route('categories.search'));
    }

    function creatorsMenu(props) {
        return <h1>Welcome back!</h1>;
    }


    useEffect(() => {
      const header = document.getElementById('header');
      const sticky = header.offsetTop;
      const scrollCallBack = window.addEventListener('scroll', () => {
        if (window.pageYOffset > sticky) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      });

      return () => {
        window.removeEventListener('scroll', scrollCallBack);
      };
    }, []);

    const getBackground = () => {
      let base = 'transparent';
      let md = 'transparent';
      let lg = 'transparent';

      if (isSticky) {
        base = '#fff';
        md = '#fff';
        lg = '#fff';
      }

      if (isMobileMenuOpen) {
        base = 'glacier.900';
        md = 'glacier.900';
        lg = 'transparent';
      }

      return {
        base,
        md,
        lg
      };
    };


    if (isSticky) {
      return (
        <Flex
          id="header"
          as="nav"
          width="full"
          color={isMobileMenuOpen ? 'white' : 'chantilly.500'}
          background={getBackground}
          zIndex={3}
          position="fixed"
          top={0}
          left={0}
          px={isMobileMenuOpen ? 6 : 0}
          py={4}
          boxShadow="sm"
          he
        >
          <Container
            maxWidth={isMobileMenuOpen ? null : '8xl'}
            px={isMobileMenuOpen ? null : { base: 6, md: 6, lg: 24 }}
          >
            <HStack
              width="full"
              justify="space-between"
              align="center"
              wrap="wrap"
            >
              <Flex align="center" mr={5} py={2}>
                <Link href={route('pages.home')}>
                  <Image
                    src={isMobileMenuOpen ? '/images/logo/white-lg.png' : stickyLogoVariant}
                    height="30px"
                    width="100px"
                  />
                </Link>
              </Flex>
              <Box
                display={{ lg: 'none' }}
                border={isMobileMenuOpen ? 'none' : '1px solid rgba(231, 174, 187, 0.5)'}
                borderRadius="50%"
                p={3}
                onClick={onToggle}
              >
                {isMobileMenuOpen ? (<CloseIcon fontSize="1xl" />) : (<HamburgerIcon fontSize="2xl" />)}
              </Box>
              <Box
                display={{ base: isMobileMenuOpen ? 'block' : 'none', lg: 'flex' }}
                mx={{ base: 16, md: 16, lg: 0 }}
                width={{ base: 'full', md: 'full', lg: 'auto' }}
                alignItems="center"
                justifyContent="flex-end"
                fontWeight="semibold"
                flexGrow={1}
              >
                <Link href={route('pages.home')} mt={{ base: 6, md: 6, lg: 0 }} mr={7} display="block">
                  <Text>
                    {lang.get('navigation.home')}
                  </Text>
                </Link>
                <Link as={InertiaLink} href={route('categories.index')} mt={{ base: 6, md: 6, lg: 0 }} mr={7} display="block">
                  <Text>
                    {lang.get('navigation.categories')}
                  </Text>
                </Link>
                <Link as={InertiaLink} href={route('pages.about_us')} mt={{ base: 6, md: 6, lg: 0 }} mr={7} display="block">
                  <Text>
                    {lang.get('navigation.about_us')}
                  </Text>
                </Link>
                <Link as={InertiaLink} href={route('blog.index')} mt={{ base: 6, md: 6, lg: 0 }} mr={7} display="block">
                  <Text>
                    {lang.get('navigation.blog')}
                  </Text>
                </Link>
                {authUser && (
                <Menu>
                  <MenuButton mt={{ base: 6, md: 6, lg: 0 }} mr={7} display="block">
                    <Avatar size="sm" src={authUser.avatar} background="glacier.300">
                      <AvatarBadge boxSize="1em" bg="green.500" />
                    </Avatar>
                  </MenuButton>
                  <MenuList color="black">
                    {(authUser.type === 'creator' && authUser.plan_name !== 'basic') && (
                      <MenuItem as={InertiaLink} href={route('creator_dashboard.index')} fontWeight="medium">
                        {lang.get('navigation.creator_dashboard')}
                      </MenuItem>
                    )}
                    {authUser.type === 'creator' && (
                      <MenuItem as={InertiaLink} href={route('checkout.my_plan')} fontWeight="medium">
                          {lang.get('navigation.my_plan')}
                      </MenuItem>
                    )}
                    <MenuItem as={InertiaLink} href={route('auth.settings')} fontWeight="medium">
                      {lang.get('navigation.settings')}
                    </MenuItem>
                    <MenuItem as={InertiaLink} href={route('auth.logout')} fontWeight="medium" >
                      {lang.get('navigation.logout')}
                  </MenuItem>
                  </MenuList>
                </Menu>
                )}
                {!authUser && (
                  <Link href={route('auth.login')} mt={{ base: 6, md: 6, lg: 0 }} mr={7} display="block">
                    <Text>
                      {lang.get('navigation.login')}
                    </Text>
                  </Link>
                )}
                {isMobileMenuOpen ? (!authUser && (<Link href={route('auth.register')} mt={{ base: 6, md: 6, lg: 0 }} mr={7} display="block">
                  <Text>
                    {lang.get('navigation.sign_up')}
                  </Text>
                </Link>)) : ''}
                <Button
                  as={InertiaLink}
                  href={context === 'creator' ? route('pages.home') : route('pages.creators')}
                  size="sm"
                  background={isMobileMenuOpen ? 'white' : 'chantilly.500'}
                  _hover={{ background: isMobileMenuOpen ? 'glacier.600' : 'chantilly.600' }}
                  _focus={{ background: isMobileMenuOpen ? 'glacier.600' : 'chantilly.600' }}
                  color={isMobileMenuOpen ? 'glacier.500' : 'white'}
                  fontSize="md"
                  textDecoration="none"
                  mt={{ base: 6, md: 6, lg: 0 }}
                  borderRadius="20px"
                  minWidth="200px"
                >
                  {context === 'creator' ? lang.get('navigation.for_reviewers') : lang.get('navigation.for_onlyfans_creators')}
                </Button>
              </Box>
            </HStack>
          </Container>
        </Flex>
      );
    }

    if (scheme === 'chantilly') {
      return (
        <Flex
          id="header"
          as="nav"
          width="full"
          color={textColor}
          background={getBackground}
          zIndex={3}
          px={isMobileMenuOpen ? 6 : 0}
          py={4}
          boxShadow={boxShadow}
        >
          <Container
            maxWidth={isMobileMenuOpen ? null : '8xl'}
            px={isMobileMenuOpen ? null : { base: 6, md: 6, lg: 24 }}
          >
            <HStack
              width="full"
              justify="space-between"
              align="center"
              wrap="wrap"
            >
              <Flex align="center" mr={5} py={2}>
                <Link href={route('pages.home')}>
                  <Image
                    src={logoVariant}
                    height="30px"
                    width="100px"
                  />
                </Link>
              </Flex>
              <Box
                display={{ lg: 'none' }}
                border={isMobileMenuOpen ? 'none' : '1px solid rgba(255, 255, 255, 0.5)'}
                borderRadius="50%"
                p={3}
                onClick={onToggle}
              >
                {isMobileMenuOpen ? (<CloseIcon fontSize="1xl" />) : (<HamburgerIcon fontSize="2xl" />)}
              </Box>
              <Box
                display={{ base: isMobileMenuOpen ? 'block' : 'none', lg: 'flex' }}
                mx={{ base: 16, md: 16, lg: 0 }}
                width={{ base: 'full', md: 'full', lg: 'auto' }}
                alignItems="center"
                justifyContent="flex-end"
                fontWeight="semibold"
                flexGrow={1}
              >

                <Link href={route('pages.home')} mt={{ base: 6, md: 6, lg: 0 }} mr={7} display="block">
                  <Text>
                    {lang.get('navigation.home')}
                  </Text>
                </Link>
                <Link as={InertiaLink} href={route('categories.index')} mt={{ base: 6, md: 6, lg: 0 }} mr={7} display="block">
                  <Text>
                    {lang.get('navigation.categories')}
                  </Text>
                </Link>
                <Link as={InertiaLink} href={route('pages.about_us')} mt={{ base: 6, md: 6, lg: 0 }} mr={7} display="block">
                  <Text>
                    {lang.get('navigation.about_us')}
                  </Text>
                </Link>
                <Link as={InertiaLink} href={route('blog.index')} mt={{ base: 6, md: 6, lg: 0 }} mr={7} display="block">
                  <Text>
                    {lang.get('navigation.blog')}
                  </Text>
                </Link>
                {authUser && (
                <Menu>
                  <MenuButton mt={{ base: 6, md: 6, lg: 0 }} mr={7} display="block">
                    <Avatar size="sm" src={authUser.avatar} background="glacier.300">
                      <AvatarBadge boxSize="1em" bg="green.500" />
                    </Avatar>
                  </MenuButton>
                  <MenuList color="black">
                    {(authUser.type === 'creator' && authUser.plan_name !== 'basic') && (
                      <MenuItem as={InertiaLink} href={route('creator_dashboard.index')} fontWeight="medium">
                          {lang.get('navigation.creator_dashboard')}
                      </MenuItem>
                    )}
                    {authUser.type === 'creator' && (
                      <MenuItem as={InertiaLink} href={route('checkout.my_plan')} fontWeight="medium">
                          {lang.get('navigation.my_plan')}
                      </MenuItem>
                    )}
                    <MenuItem as={InertiaLink} href={route('auth.settings')} fontWeight="medium">
                      {lang.get('navigation.settings')}
                    </MenuItem>
                    <MenuItem as={InertiaLink} href={route('auth.logout')} fontWeight="medium" >
                      {lang.get('navigation.logout')}
                  </MenuItem>
                  </MenuList>
                </Menu>
                )}
                {!authUser && (
                  <Link href={route('auth.login')} mt={{ base: 6, md: 6, lg: 0 }} mr={7} display="block">
                    <Text>
                      {lang.get('navigation.login')}
                    </Text>
                  </Link>
                )}
                {isMobileMenuOpen ? (!authUser && (<Link href={route('auth.register')} mt={{ base: 6, md: 6, lg: 0 }} mr={7} display="block">
                  <Text>
                    {lang.get('navigation.sign_up')}
                  </Text>
                </Link>)) : ''}
                <Button
                  as={InertiaLink}
                  href={context === 'creator' ? route('pages.home') : route('pages.creators')}
                  size="sm"
                  background={btnScheme.background}
                  color={btnScheme.color}
                  fontSize="md"
                  textDecoration="none"
                  mt={{ base: 6, md: 6, lg: 0 }}
                  borderRadius="20px"
                  minWidth="200px"
                >
                  {context === 'creator' ? lang.get('navigation.for_reviewers') : lang.get('navigation.for_onlyfans_creators')}
                </Button>
              </Box>
            </HStack>
          </Container>
        </Flex>
      );
    }


  }
