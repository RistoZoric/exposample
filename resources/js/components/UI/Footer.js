import {
    Text,
    Box,
    Container,
    Stack,
    List,
    ListItem,
    Icon,
    Select,
    Wrap,
    Link,
    Image,
  } from '@chakra-ui/react';
  import {
    IoLogoTiktok, IoLogoDiscord, IoLogoFacebook, IoLogoYoutube, IoLogoTwitter, IoLogoInstagram,
  } from 'react-icons/io5';
  import { InertiaLink, usePage } from '@inertiajs/inertia-react';
  import { Inertia } from '@inertiajs/inertia';
  import useRoutes from '@/utils/useRoutes';
  import useLang from '@/utils/useLang';
  import '../../../Assets/Footer.css'
  import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'

  export default function Footer() {
    const { locale } = usePage().props;
    const lang = useLang(locale);
  lang.setFallback("en");
    const route = useRoutes();

    function handleChangeLocale(value) {
      Inertia.post(route('auth.update_locale'), {
        locale: value,
      });
    }

    const currentUSer = localStorage.getItem("current_domain");
    const currentDomain = location.hostname;
   
    const app_env = localStorage.getItem("app_env"); 
    const base_url = localStorage.getItem("base_url"); 

    const handleMultipleDomain = (url,jump=false,currentUSer,jump_url='') => {
      const app_env = localStorage.getItem("app_env");
        if(app_env === 'local'){
            var http = 'http://'; 
        }else{
            var http = 'https://'; 
        }
 
        if(currentUSer == 'creator' && jump === false ){
            window.location.href =location.origin+'/'+url ;
        }
        if(currentUSer == 'reviewer' && jump === false ){
            window.location.href = location.origin+'/'+url ;    
        }
        
        if(jump_url != '' && jump == true ){
          if(url){
              window.open( http+jump_url+'/'+url,"_blank" );
          }else{
              window.open(http+jump_url,"_blank");
          }
              
      } 
    }
    

 

    return (
      <Box w="full" background="glacier.100">
        <Container maxWidth="8xl" spacing={16} py={8} px={10}>
          <Link
            as={InertiaLink}
            href={route('pages.home')}
            display={{ base: 'block', md: 'none' }}
            mb={6}
          >
            <Image src="/images/logo/gradient-lg.png" width="96px" />
          </Link>
          <Wrap justify={{ lg: 'space-between' }} color="black">
            <Box width={{ base: 'full', md: '30%', lg: '15%' }} pb={6}>
              <Text fontSize="xl" fontWeight="semibold" mb={5}>
                {lang.get('footer.about.title')}
              </Text>
              <List spacing={3} fontWeight="semibold" color="gray.400">
                <ListItem>
                  <Link as={InertiaLink} href={route('pages.about_us')}>
                    <Text>{lang.get('footer.about.about_us')}</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={InertiaLink} href={route('blog.index')}>
                    <Text>{lang.get('footer.about.blog')}</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={InertiaLink} href={'/trust-in-reviews'}>
                    <Text>{lang.get('footer.about.trust_in_reviews')}</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://support.privy.reviews/hc/en-us/requests/new"
                    target="_blank"
                  >
                    <Text>{lang.get('footer.about.contact_us')}</Text>
                  </Link>
                </ListItem>
              </List>
            </Box>
            <Box width={{ base: 'full', md: '30%', lg: '15%' }} pb={6}>
              <Text fontSize="xl" fontWeight="semibold" mb={5}>
                {lang.get('footer.community.title')}
              </Text>
              <List spacing={3} fontWeight="semibold" color="gray.400">
                <ListItem>
                  <Link as={InertiaLink} href={'/categories'}>
                    {lang.get('footer.community.leave_a_review')}
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://support.privy.reviews/hc/en-us"
                    target="_blank"
                  >
                    <Text>{lang.get('footer.community.support')}</Text>
                  </Link>
                </ListItem>
                {/* <Popover placement='top-start'>
                  <PopoverTrigger>
                    <li  className="cst-li" ><a> <Text>{lang.get('footer.onlyfans_creators.sign_up')} </Text></a></li>
               
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader fontWeight='semibold'>signup as ?</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                    <Link as={InertiaLink} href="#" onClick={() => handleRegister('creator')} ><Text> Creator </Text></Link>
                    <Link as={InertiaLink} href="#" onClick={() => handleRegister('reviewer')} ><Text> Reviewer </Text></Link>
                    </PopoverBody>
                  </PopoverContent>
                </Popover> */}

                {/* <Popover placement='top-start'>
                  <PopoverTrigger>
                  <li  className="cst-li" ><a> <Text>
                      {lang.get('footer.onlyfans_creators.login')}
                    </Text> </a></li>
               
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader fontWeight='semibold'>Sign In as ?</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                    <Link  href="#" onClick={() => handleLogin('creator')} ><Text> Creator </Text></Link>
                    <Link  href="#" onClick={() => handleLogin('reviewer')} ><Text> Reviewer </Text></Link>
                    </PopoverBody>
                  </PopoverContent>
                </Popover> */}
                <ListItem>
                  <Link
                    as={InertiaLink}
                    href="#"
                    onClick={() =>
                      handleMultipleDomain(
                        currentUSer == 'reviewer' ? 'register' : '',
                        currentUSer == 'reviewer' ? false : true,
                        currentUSer,
                        base_url + '/register'
                      )
                    }
                  >
                    <Text>{lang.get('footer.community.sign_up')}</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    as={InertiaLink}
                    href="#"
                    onClick={() =>
                      handleMultipleDomain(
                        currentUSer == 'reviewer' ? 'sign-in' : '',
                        currentUSer == 'reviewer' ? false : true,
                        currentUSer,
                        base_url + '/sign-in'
                      )
                    }
                  >
                    <Text>{lang.get('footer.community.login')}</Text>
                  </Link>
                </ListItem>
              </List>
            </Box>
            <Box width={{ base: 'full', md: '30%', lg: '15%' }} pb={6}>
              <Text fontSize="xl" fontWeight="semibold" mb={5}>
                {lang.get('footer.onlyfans_creators.title')}
              </Text>
              <List spacing={3} fontWeight="semibold" color="gray.400">
                <ListItem>
                  <Link
                    as={InertiaLink}
                    href="#"
                    onClick={() =>
                      handleMultipleDomain(
                        currentUSer == 'reviewer' ? 'home' : '',
                        currentUSer == 'creator' ? false : true,
                        currentUSer,
                        'creators.' + base_url
                      )
                    }
                  >
                    <Text>
                      {lang.get('footer.onlyfans_creators.for_creators')}
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={InertiaLink} href={'/plans-and-pricing'}>
                    <Text>
                      {lang.get('footer.onlyfans_creators.plans_and_pricing')}
                    </Text>
                  </Link>
                </ListItem>

                {/* <Popover placement='top-start'>
                  <PopoverTrigger>
                  <li  className="cst-li" ><a> <Text>{lang.get('footer.onlyfans_creators.sign_up')} </Text></a></li>
               
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader fontWeight='semibold'>signup as ?</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                    <Link as={InertiaLink} href="#" onClick={() => handleRegister('creator')} ><Text> Creator </Text></Link>
                    <Link as={InertiaLink} href="#" onClick={() => handleRegister('reviewer')} ><Text> Reviewer </Text></Link>
                    </PopoverBody>
                  </PopoverContent>
                </Popover> */}

                {/* <Popover placement='top-start'>
                  <PopoverTrigger>
                  <li  className="cst-li" ><a> <Text>
                      {lang.get('footer.onlyfans_creators.login')}
                    </Text> </a></li>
               
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader fontWeight='semibold'>Sign In as ?</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                    <Link  href="#" onClick={() => handleLogin('creator')} ><Text> Creator </Text></Link>
                    <Link  href="#" onClick={() => handleLogin('reviewer')} ><Text> Reviewer </Text></Link>
                    </PopoverBody>
                  </PopoverContent>
                </Popover> */}

                <ListItem>
                  <Link
                    as={InertiaLink}
                    href="#"
                    onClick={() =>
                      handleMultipleDomain(
                        currentUSer == 'creator' ? 'register' : '',
                        currentUSer == 'creator' ? false : true,
                        currentUSer,
                        'creators.' + base_url + '/register'
                      )
                    }
                  >
                    <Text> {lang.get('footer.onlyfans_creators.sign_up')}</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    as={InertiaLink}
                    href="#"
                    onClick={() =>
                      handleMultipleDomain(
                        currentUSer == 'creator' ? 'sign-in' : '',
                        currentUSer == 'creator' ? false : true,
                        currentUSer,
                        'creators.' + base_url + '/sign-in'
                      )
                    }
                  >
                    <Text>{lang.get('footer.onlyfans_creators.login')}</Text>
                  </Link>
                </ListItem>
              </List>
            </Box>
            <Box width={{ base: 'full', md: '30%', lg: '15%' }} pb={6}>
              <Text fontSize="xl" fontWeight="semibold" mb={5}>
                {lang.get('footer.follow_us.title')}
              </Text>
              <List spacing={3} color="glacier.900">
                <ListItem>
                  <Link
                    href="https://www.instagram.com/privy.reviews"
                    target="_blank"
                  >
                    <Icon as={IoLogoInstagram} fontSize="lg" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://twitter.com/Privy_Reviews"
                    target="_blank"
                  >
                    <Icon as={IoLogoTwitter} fontSize="lg" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.facebook.com/Privy-112660107590159"
                    target="_blank"
                  >
                    <Icon as={IoLogoFacebook} fontSize="lg" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.youtube.com/channel/UC_eyw64nnNZfPYW3k_KYefg"
                    target="_blank"
                  >
                    <Icon as={IoLogoYoutube} fontSize="lg" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.tiktok.com/@privyreviews"
                    target="_blank"
                  >
                    <Icon as={IoLogoTiktok} fontSize="lg" />
                  </Link>
                </ListItem>
                {/* <ListItem>
                  <Link href="https://discord.gg/Ex4VyMTg" target="_blank">
                    <Icon as={IoLogoDiscord} fontSize="lg" />
                  </Link>
                </ListItem> */}
              </List>
            </Box>
            <Box width={{ base: 'full', md: '30%', lg: '15%' }} pb={6}>
              <Text fontSize="xl" fontWeight="semibold" mb={5}>
                {lang.get('footer.language.title')}
              </Text>
              <List spacing={3} fontWeight="semibold" color="gray.400">
                <ListItem>
                  <Select
                    variant="filled"
                    background="glacier.900"
                    _hover={{ background: 'glacier.600' }}
                    _focus={{ background: 'glacier.600' }}
                    color="white"
                    width="full"
                    borderRadius="10px"
                    onChange={(event) => handleChangeLocale(event.target.value)}
                    value={locale}
                    className="footer-language-dropDown"
                  >
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="pt">Portuguese</option>
                    <option value="in">Indonesian</option>
                    <option value="ru">Russian</option>
                    <option value="es">Spanish</option>
                    <option value="vi">Vietnamese</option>
                    <option value="fil">Filipino</option>
                    <option value="th">Thai</option>
                    <option value="tr">Turkish</option>
                    <option value="ur">Urdu/Punjabi</option>
                    <option value="de">German</option>
                    <option value="ja">Japanese</option>
                    <option value="it">Italian</option>
                    <option value="hi">Hindi</option>
                  </Select>
                </ListItem>
              </List>
            </Box>
          </Wrap>
          <Stack
            w="full"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            mt={{ base: 10, md: 20 }}
          >
            <Link
              as={InertiaLink}
              href={route('pages.home')}
              display={{ base: 'none', md: 'block' }}
            >
              <Image src="/images/logo/gradient-lg.png" width="96px" />
            </Link>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 2, md: 6 }}
              fontWeight="semibold"
              color="gray.400"
            >
              <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 2, md: 6 }}
              >
                <Link
                  href="https://support.privy.reviews/hc/en-us/sections/4404069897747-Legal"
                  target="_blank"
                >
                  {lang.get('footer.legal')}
                </Link>
                <Link as={InertiaLink} href="/privacy-policy">
                  {lang.get('footer.privacy_policy')}
                </Link>
              </Stack>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 2, md: 6 }}
              >
                <Link as={InertiaLink} href="/terms-and-conditions">
                  {lang.get('footer.terms_and_conditions')}
                </Link>
                <Link
                  href="https://support.privy.reviews/hc/en-us/articles/4403922427283-Guidelines-for-creators"
                  target="_blank"
                >
                  {lang.get('footer.guidelines_for_creators')}
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    );
  }
