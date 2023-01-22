import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Text,
  Button,
  Image,
  Stack,
  HStack,
  VStack,
  Skeleton,
  Wrap,
  WrapItem,
  Link,
  Flex,
  SimpleGrid,
  useBreakpointValue,
  Menu,
  MenuList,
  MenuButton, MenuItem, Avatar, AvatarBadge,
  List, ListItem,
  Divider,
  Icon
} from '@chakra-ui/react';
import { InertiaLink, Head, usePage } from '@inertiajs/inertia-react';
import { IoBriefcaseOutline, IoHeadsetOutline, IoPeopleOutline, IoLogoTiktok, IoLogoDiscord, IoLogoFacebook, IoLogoYoutube, IoLogoTwitter, IoLogoInstagram,} from 'react-icons/io5';
import Layout from '@/shared/Layout';
import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';

import { toggleMobileMenu, selectGlobal } from '@/slices/globalSlice';
import CanelaText from '@/components/UI/CanelaText';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';
import React from 'react';
import {Helmet} from 'react-helmet';
import '../../css/app_dev.css';
const LandingPage = () => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");



  
  const currentDomain = location.hostname;
  if (
      currentDomain === "creators.privy.local" ||
      currentDomain === "localhost"
  ) {
      localStorage.setItem("app_env", "local");
      localStorage.setItem("base_url", "localhost:" + location.port);
  } else {
      localStorage.setItem("app_env", "pro");
      localStorage.setItem("base_url", "privy.reviews");
  }
  if (
      currentDomain === "creators.privy.local" ||
      currentDomain === "creators.privy.reviews"
  ) {
      localStorage.setItem("current_domain", "creator");
  } else {
      localStorage.setItem("current_domain", "reviewer");
  }

  const handleSignup = () => {
    const app_env = localStorage.getItem("app_env");
    if (app_env === "local") {
        var http = "http://";
    } else {
        var http = "https://";
    }
    const base_url = localStorage.getItem("base_url");
    window.location.href = http + 'creators.' +  base_url + "/register";
    // console.log(http + 'creators.' +  base_url + "/register");
    // alert(http + 'creators.' +  base_url + "/register");
  }

  return (
    <>
      <Helmet>
        <title>Grow With Privy</title>
      </Helmet>
      {/*<Head>
        <title>{lang.get('trust_in_reviews.meta_title')}</title>
      </Head>*/}
      <VStack
        spacing={0}
        background="#F4F4F4"
      >
          <Flex
        id="header"
        as="nav"
        width="full"
        zIndex={3}
        py={4}
      >
        <Container
          maxWidth={'8xl'}
          px={{ base: 6, md: 12, lg: 24 }}
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
                  src="/images/logo/gradient-lg.png"
                  height="30px"
                  width="100px"
                />
              </Link>
            </Flex>
            <Box
              borderRadius="50%"
              p={3}
            >
              <Button
          as={Link}
          onClick={() => handleSignup()}
          // href={route('auth.register')}
          _hover={{ textDecoration: 'none' }}
          variant="outline"
          size="lg"
          color="black"
          fontWeight="bold"
          fontSize="md"
          textTransform="uppercase"
          borderColor="black"
          borderWidth={2}
          borderRadius={0}
          minWidth={{base:"100px", md:"200px", lg:"200px"}}
        >
          Sign Up
        </Button>
            </Box>
          </HStack>
        </Container>
      </Flex>
      </VStack>
      <VStack
        spacing={0}
        background="#F4F4F4"
      >
        <Container
          maxWidth={'8xl'}
          px={{ base: 6}}
        >

        <HStack
          width="full"
          spacing={0}
          wrap={{ base: 'wrap-reverse', md: 'nowrap' }}
        >

          <Box width={{ base: 'full', md: 'full' }} p={{ md: 10, lg: 10}}>
            <CanelaText
              fontSize={{ base: '4xl', md: '4xl', lg: '7xl' }}
              pb={2}
              dangerouslySetInnerHTML={{ __html:'Grow your audience for free with Privy'}}
            />
            <Text
              fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
              maxWidth={{lg:"500px"}}
              color="gray.500"
              dangerouslySetInnerHTML={{ __html: 'Privy is an all-in-one marketing platform for digital creators. By asking your subscribers for reviews, this allows you, the creator, to grow your online reputation and receive valuable feedback to fine-tune your content.' }}
            />
            <Button
          as={Link}
          // href={route('auth.register')}
          onClick = { () => handleSignup() }
          _hover={{ textDecoration: 'none' }}
          variant="outline"
          size="lg"
          fontWeight="bold"
          fontSize="lg"
          textTransform="uppercase"
          bgColor="glacier.500"
          color="white"
          borderWidth={2}
          borderRadius={0}
          minWidth="300px"
          mt={6}
          boxShadow='0.5rem 0.5rem white'
        >
            Sign Up
        </Button>
        <Text
              fontSize="lg"
              color="gray.500"
              dangerouslySetInnerHTML={{ __html: '*No Credit Card Required' }}
              textTransform="uppercase"
              pt={5}
            />
          </Box>
          <Box width={{ base: 'full', md:'full', lg: 'full' }}>
          <VStack marginLeft={{base:0, md:'-100px', lg:'-300px'}}>
          <Image
              src="/images/styling-girl.png"
              width={{ base: 'full', md:'full', lg: 'full' }}
            />
          </VStack>

          </Box>
        </HStack>

        </Container>


      <VStack width={{ base: 'full', md:'full', lg: 'full' }} backgroundImage="/images/purple-u-bg.png" backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat">
      <Container
        as={VStack}
        maxWidth="8xl"
        px={{ base: 6, md: 12, xl: 24 }}
        py={12}
      >
        <Box width={{ base: 'full', lg: '50%' }} textAlign="center">
        <VStack spacing={4}>
        <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} fontWeight="bold"  textTransform="uppercase">
            Our Service
          </Text>
              <CanelaText
                color="black"
                fontSize={{ base: '5xl', md: '6xl' }}
                as="h1"
                dangerouslySetInnerHTML={{ __html:'Why Privy?'}}
              />
              <Text fontSize={{ base: 'md', md: 'lg' }} color="black" maxWidth="500px">
                We are built for growing creators audiences. Privy is the #1 creator review platform that lets users review their favorite content creators.
              </Text>
        </VStack>
        </Box>

        </Container>
        <Box width={{ base: 'full', md:'full', lg: 'full' }}>
        <VStack
        maxWidth="8xl"
        px={{ base: 6, md: 12, lg: 24 }}
        py={{ base: 8, md: 16 }}
      >

        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 6, lg: 6, md:6 }}
          justify="center"
        >
            <Box>
            <VStack width={{ base: 'full', lg: '350px' }} spacing={4} background="white" padding={10}  boxShadow="sm" height="450px" mt={{base:0, md:40, lg:40}} borderRadius={3}>
            <Box bg="glacier.500" p={10} borderRadius="50%" align="center" lineHeight="120%">

            <Icon as={IoBriefcaseOutline} color="white" fontSize={{ base: '4xl', lg: '6xl' }} fontWeight="bold"/>

            </Box>
            <Divider orientation='horizontal' />
            <Text fontSize={{ base: 'xl', lg: 'xl' }} fontWeight="semibold" lineHeight="120%" align="start">
              Premium 24/7 Support
            </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" lineHeight="120%" align="start" maxWidth="300px">
              Get the help you need, whenever you need it with our 24/7 support.
            </Text>
            </VStack>
            </Box>

            <Box>
            <VStack width={{ base: 'full', lg: '350px' }} spacing={4} background="white" padding={10}  boxShadow="sm" height="450px" mt={{base:0, md:20, lg:20}} borderRadius={3}>
            <Box bg="glacier.500" p={10} borderRadius="50%" align="center" lineHeight="120%">

            <Icon as={IoHeadsetOutline} color="white" fontSize={{ base: '4xl', lg: '6xl' }} fontWeight="bold"/>

            </Box>


            <Divider orientation='horizontal' />
            <Text fontSize={{ base: 'xl', lg: 'xl' }} fontWeight="semibold" lineHeight="120%" align="start">
              Anti-spam and anti-bullying
            </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" lineHeight="120%" align="start" maxWidth="300px">
              We take compliance with anti-extortion laws very seriously and have zero tolerance against the use of reviews as leverage.
            </Text>
            </VStack>
            </Box>

            <Box>

            <VStack width={{ base: 'full', lg: '350px' }} background="white" padding={10}  boxShadow="sm" height="450px" borderRadius={3}>
            <Box bg="glacier.500" p={10} borderRadius="50%" align="center" lineHeight="120%">

            <Icon as={IoPeopleOutline} color="white" fontSize={{ base: '4xl', lg: '6xl' }} fontWeight="bold"/>

            </Box>


            <Divider orientation='horizontal' />
            <Text fontSize={{ base: 'xl', lg: 'xl' }} fontWeight="semibold" lineHeight="120%" align="start">
              Real reviews in real-time
            </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" lineHeight="120%" align="start" maxWidth="300px">
              Every single review is published instantly and without moderation. Giving creators a safe space to learn from subscriber feedback and create better experiences.
            </Text>
            </VStack>
            </Box>



        </Stack>


      </VStack>
      <VStack width={{ base: 'full', md:'full', lg: 'full' }} bgColor="#F4F4F4" p={{lg:40}} marginTop={{lg:"-400px"}}>
        <Box width={{ base: 'full', lg: '50%' }} textAlign="center" paddingTop={{lg:"250px"}}>

        <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} fontWeight="bold"  textTransform="uppercase">
            Get Started For Free
          </Text>
          <Button
          as={Link}
          // href={route('auth.register')}
          onClick = { () => handleSignup() }
          _hover={{ textDecoration: 'none' }}
          variant="outline"
          size="lg"
          fontWeight="bold"
          fontSize="lg"
          textTransform="uppercase"
          bgColor="glacier.500"
          color="white"
          borderWidth={2}
          borderRadius={0}
          minWidth="300px"
          mt={6}
          //boxShadow='0.5rem 0.5rem black, -0.5rem -0.5rem #ccc'
          boxShadow='0.5rem 0.5rem #FFB8AA'
        >
            Sign Up
        </Button>


        </Box>

      </VStack>
      </Box>

      </VStack>



        <Container
        as={VStack}
        maxWidth="8xl"
      >

        <HStack
          width="full"
          spacing={0}
          wrap={{ base: 'wrap-reverse', md: 'nowrap' }}
        >

          <Box width={{ base: 'full', md: 'full' }} p={{ md: 10, lg: 10}}>
          <VStack align="start" pl={{lg:20}}>
          <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} fontWeight="bold" color="glacier.500" textTransform="uppercase" pb={10}>
            About Us
          </Text>
            <CanelaText
              fontSize={{ base: '4xl', md: '4xl', lg: '7xl' }}
              pb={10}
              dangerouslySetInnerHTML={{ __html:'Grow with Privy'}}
            />
            <Text
              fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
              color="gray.500"
              dangerouslySetInnerHTML={{ __html: 'No matter the size of your audience, our tools are here to help you launch, build and grow.' }}
              maxWidth="300px"
              pb={{base:10}}
            />
          </VStack>


        </Box>
          <Box width={{ base: 'full', md:'full', lg: 'full' }} >
          <Image
              src="/images/man-working.png"
              width={{ base: 'full', md:'full', lg: 'full' }}
              marginLeft={{lg:"-200px"}}
              marginTop={{lg:"-200px"}}
            />
          </Box>
        </HStack>
        <HStack width="full"
          spacing={0} >
            <VStack align="start" pl={{lg:20}} marginTop={{lg:"-200px"}} marginBottom={{lg:"-100px"}} zIndex={{lg:1}}>
        <Stack
          direction={{ base: 'column'}}
          spacing={{ base: 6, lg: 6, md:6 }}
        >
            <Box>
            <VStack width={{ base: 'full', lg: '350px' }} spacing={4} background="white" boxShadow="sm" align="start" py={10} px={5} borderRadius={3}>
            <Text fontSize={{ base: 'xl', lg: 'xl' }} fontWeight="bold" lineHeight="120%" align="start">
              Market yourself
            </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" lineHeight="120%" align="start" maxWidth="300px">
            Create your free profile and invite your subscribers to review your content. Once you've created a profile you will be added to out "categories" page for new users to find you.
            </Text>
            </VStack>
            </Box>

            <Box>
            <VStack width={{ base: 'full', lg: '350px' }} spacing={4} background="white" boxShadow="sm" align="start" py={10} px={5} marginLeft={{lg:"360px"}} marginTop={{lg:"-100px"}} borderRadius={3}>
            <Text fontSize={{ base: 'xl', lg: 'xl' }} fontWeight="bold" lineHeight="120%" align="start">
            Get found online
            </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" lineHeight="120%" align="start" maxWidth="300px">
            Once you've created a profile popular search engines like Google, Bing, and Yandex, etc will show  your profile and star rating.
            </Text>
            </VStack>
            </Box>

            <Box>
            <VStack width={{ base: 'full', lg: '350px' }} spacing={4} background="white" boxShadow="sm" align="start" py={10} px={5} marginTop={{lg:"-120px"}} borderRadius={3} marginBottom={{base:10}}>
            <Text fontSize={{ base: 'xl', lg: 'xl' }} fontWeight="bold" lineHeight="120%" align="start">
            Get paid what you deserve
            </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" lineHeight="120%" align="start" maxWidth="300px">
            We understand that getting paid a fair wage from brands/businesses can be tricky in this industry. Use your star rating to show potential collaborations your worth.
            </Text>
            </VStack>
            </Box>


        </Stack>
        </VStack>
        </HStack>
      </Container>

        <VStack
        width={{ base: 'full', md:'full', lg: 'full' }}
        px={{ base: 6, md: 12, lg:12 }}
        background="blackAlpha.200"
        pt={{lg:40, base:20}}
        pb={{base:20}}
      >
    <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 6, lg: 6, md:6 }}
          justify="start" marginBottom={{lg:"-200px"}}
        >
            <Box>
            <VStack width={{ base: 'full', lg: '400px' }} spacing={4} background="white" boxShadow="sm" align="start" py={10} px={5} background="blackAlpha.800" color="white" borderRadius={3}>
            <Text fontSize={{ base: 'xl', lg: 'xl' }} fontWeight="bold" lineHeight="120%" align="start">
              Audience management
            </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" lineHeight="120%" align="start" maxWidth="300px">
              Put your people at the heart  of your marketing with tools that help you get to know your audience and insights that can help drive better results.
            </Text>
            </VStack>
            </Box>


            <Box>
            <VStack width={{ base: 'full', lg: '400px' }} spacing={4} background="white" boxShadow="sm" align="start" py={10} px={5} background="chantilly.500" color="white" borderRadius={3}>
                  <Text fontSize={{ base: 'xl', lg: 'xl' }} fontWeight="bold" lineHeight="120%">
                  Premium plans and features
                  </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" lineHeight="120%" align="start" maxWidth="300px">
              Privy is free for everyone, but if you want to outshine your competition then we have premium plans with extra features that wil help you do that.
            </Text>
            </VStack>
            </Box>

            <Box>
            <VStack width={{ base: 'full', lg: '400px' }} spacing={4} background="white" boxShadow="sm" align="start" py={10} px={5} background="glacier.500" color="white" borderRadius={3}>
                <Text fontSize={{ base: 'xl', lg: 'xl' }} fontWeight="bold" lineHeight="120%" >
                  Insights and analytics
                </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" lineHeight="120%" align="start" maxWidth="300px">
              With all your data and insights in one place, you can see  what's working best and get recommendations to help you do more of it.
            </Text>
            </VStack>
            </Box>


    </Stack>
      </VStack>
      <Container
        as={VStack}
        maxWidth="full"
        px={{ base: 6, md: 12, xl: 24 }}
        py={16}
        pt={{lg:40}}
      >
        <Box width={{lg: '50%' }} textAlign="center" p={20}>
        <VStack spacing={4}>
        <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} fontWeight="bold"  textTransform="uppercase">
            Ready To Get Started?
          </Text>
          <Button
          as={Link}
          // href={route('auth.register')}
          onClick = { () => handleSignup() }
          _hover={{ textDecoration: 'none' }}
          variant="outline"
          size="lg"
          fontWeight="bold"
          fontSize="lg"
          textTransform="uppercase"
          bgColor="chantilly.500"
          color="white"
          borderWidth={2}
          borderRadius={0}
          minWidth="300px"
          mt={6}
          //boxShadow='0.5rem 0.5rem black, -0.5rem -0.5rem #ccc'
          boxShadow='0.5rem 0.5rem #80CAE5'
        >
            Sign Up
        </Button>
        </VStack>

        </Box>
        </Container>

        <Container
          maxWidth={'8xl'}
          px={{ base: 6}}
        >

        <HStack
          width="full"
          spacing={0}
          wrap={{ base: 'wrap-reverse', md: 'nowrap' }}
        >

          <Box width={{ base: 'full', md: 'full' }} p={{ md: 10, lg: 10}}>
          <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} fontWeight="bold" color="chantilly.500" textTransform="uppercase" p={{lg:10}}>
            Social Proof
          </Text>
            <CanelaText
              fontSize={{ base: '4xl', md: '4xl', lg: '48px' }}
              pb={10}
              dangerouslySetInnerHTML={{ __html:'How can Privy help me?'}}
              maxWidth="350px"
            />
            <Text
              fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
              maxWidth={{lg:"500px"}}
              color="gray.500"
              dangerouslySetInnerHTML={{ __html: 'We have heard, from the creator community, that getting paid a fair wage for created content and collabs is a big issue. We understand that creators work hard and we want creators to be paid fairly for their work. That\'s why we have created Privy, to give creators a voice and a way to prove their worth.' }}
              maxWidth="300px"
              pb={{base:10}}
            />
            <Box align="start" lineHeight="120%" display={{base:'none',lg:'block'}}>

            <Image src="/images/arrow-org.svg" marginLeft="500px"/>


            </Box>

          </Box>
          <Box width={{ base: 'full', md:'full', lg: '80%' }}>
          <VStack marginLeft={{base:0, md:'-100px', lg:'-150px'}}>
          <Image
              src="/images/help-me.png"
              width={{ base: 'full', md:'full', lg: 'full' }}
            />
          </VStack>

          </Box>
        </HStack>

        </Container>

        </VStack>

        <VStack
        spacing={0}
        background="blackAlpha.200"
      >
        <Container
        as={VStack}
        maxWidth="8xl"
        px={{ base: 6, md: 12, xl: 24 }}
        py={16}
      >
        <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} fontWeight="bold" color="chantilly.500" textTransform="uppercase">
            5 Reasons
          </Text>


          <HStack>
          <Image src="/images/b-star.svg" display={{base:'none', lg:'block'}} marginTop="-150px"/>
          <Text fontSize={{ base: 'lg', md: 'xl', lg: '4xl' }} fontWeight="semibold" textTransform="uppercase" align="center">
            Why You Should Use Privy Reviews As Part Of Your Online Marketing Strategy
          </Text>
          </HStack>


    <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 6, lg: 6, md:6 }}
          justify="center"
        >
            <Box>
            <VStack width={{ base: 'full', lg: '500px' }} spacing={4} background="chantilly.500" boxShadow="sm" align="start" py={10} px={5} borderRadius={3}>
            <Box bg="white" p={5} borderRadius="50%" align="center" lineHeight="120%">

              <Image src="/images/online-presence.png"/>

            </Box>
            <Text fontSize={{ base: 'xl', lg: 'xl' }} fontWeight="bold" color="black" lineHeight="120%" align="start" textTransform="uppercase">
              Online Presence (SEO)
            </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" lineHeight="120%" align="start" maxWidth="420px">
              The more places you're listed the greater chance new subscribers will find you and your content. Search engines like Google will index our website and show your Privy profile when people search for you.
            </Text>
            </VStack>
            </Box>


            <Box>
            <VStack width={{ base: 'full', lg: '400px' }} spacing={4} background="chantilly.500" boxShadow="sm" boxShadow="sm" align="start" py={10} px={5} borderRadius={3} marginTop={{lg:"100px"}}>
            <Box bg="white" p={4} borderRadius="50%" align="center" lineHeight="120%">

              <Image src="/images/real-reviews.png"/>

            </Box>
                  <Text fontSize={{ base: 'xl', lg: 'xl' }} fontWeight="bold" color="white" lineHeight="120%" textTransform="uppercase">
                  Real Reviews
                  </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="white" lineHeight="120%" align="start" maxWidth="300px">
              Getting reviews will reaffirm the amazing content you're creating. The more amazing 5-star reviews you get the more likely you will gain more subscribers. You will also be featured as a top-rated creator!
            </Text>
            </VStack>
            </Box>
            <Box>
            <VStack width={{lg: '400px' }} display={{base:'none', lg:'block'}}>
            <Box align="start" lineHeight="120%">

              <Image src="/images/arrow-black.svg"/>


            </Box>
            <Box align="start" lineHeight="500%">
              <Image src="/images/org-circle.svg" display={{base:'none', lg:'block'}} marginTop="150px" marginLeft="100px"/>
            </Box>
            </VStack>
            </Box>
    </Stack>

    <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 6, lg: 6, md:6 }}
          justify="center"
        >
          <Box>
            <VStack width={{lg: '100px' }} display={{base:'none', lg:'block'}}>
            <Box align="center" lineHeight="120%">

              <Image src="/images/b-circle.svg" marginLeft="-400px"/>
            </Box>
            </VStack>
            </Box>
            <Box>
            <VStack width={{ base: 'full', lg: '250px' }} spacing={2} background="white" boxShadow="sm" align="start" py={10} px={5} borderRadius={3} marginTop={{lg:"-100px", base:"-40px"}} marginLeft={{lg:"-68px"}} >
            <Box bg="chantilly.500" p={5} borderRadius="50%" align="center" lineHeight="120%">

              <Image src="/images/free-advertising.png"/>

            </Box>
                  <Text fontSize={{ base: 'xl', lg: 'xl' }} fontWeight="bold" color="black" lineHeight="120%" textTransform="uppercase">
                  Free Advertising
                  </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" lineHeight="120%" align="start" maxWidth="300px">
              Using Privy Reviews is free for everyone. Collect amazing reviews and copy/paste your profile's URL to your amazing reviews.
            </Text>
            </VStack>
            </Box>

            <Box>
            <VStack width={{ base: 'full', lg: '250px' }} spacing={2} background="glacier.500" boxShadow="sm" align="start" py={10} px={5} borderRadius={3} marginTop={{lg:"20px"}}>
            <Box bg="white" p={5} borderRadius="50%" align="center" lineHeight="120%">

              <Image src="/images/hand-shake.png"/>

            </Box>
                  <Text fontSize={{ base: 'xl', lg: 'xl' }} fontWeight="bold" color="white" lineHeight="120%" textTransform="uppercase">
                  Community
                  </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="white" lineHeight="120%" align="start" maxWidth="300px">
              Respond to your subscribers' reviews and create an open dialogue. This will help with subscriber retention whilst taking their feedback to create even better content.
            </Text>
            </VStack>
            </Box>

            <Box>
            <VStack width={{ base: 'full', lg: '350px' }} spacing={4} background="white" boxShadow="sm" align="start" py={10} px={5} borderRadius={3} marginTop={{lg:"20px"}}>
            <Box bg="chantilly.500" p={5} borderRadius="100%" align="center" lineHeight="120%">

              <Image src="/images/beat-your-competition.png" />

            </Box>
                  <Text fontSize={{ base: 'xl', lg: 'xl' }} fontWeight="bold" color="black" lineHeight="120%" textTransform="uppercase">
                  Beat Your Competition
                  </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" lineHeight="120%" align="start" maxWidth="300px">
              Being a creator is a very competitive profession so you will need to use all available tools to beat out your competition. Using Privy Reviews will give you the edge to do just that.
            </Text>
            </VStack>
            </Box>

    </Stack>

   </Container>
      </VStack>
        <Box w="full" background="black">
          <Container
        as={VStack}
        maxWidth="8xl"
        px={{ base: 6, md: 12, xl: 24 }}
        py={16}
      >
        <Stack
            w="full"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            pt={{ base: 10, md:10, lg: 10 }}
          >
            <Link
              as={InertiaLink}
              href={route('pages.home')}
            >
              <Image
                src="/images/logo/white-lg.png"
                width="96px"
              />
            </Link>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 2, md: 6 }}
              fontWeight="semibold"
              color="gray.400"
            >
              <Stack direction={{base: 'row', md: 'row'}} spacing={{ base: 2, md: 6 }}>
                <Link href="https://www.facebook.com/Privy-112660107590159" target="_blank">
                <Box bg="chantilly.500" p={2} borderRadius={{lg:"50%", base:"50%"}} align="center" lineHeight="120%">
                    <Icon as={IoLogoFacebook} color="white" fontSize="lg" fontWeight="bold"/>
                </Box>
                </Link>
                <Link href="https://twitter.com/Privy_Reviews" target="_blank">
                <Box bg="chantilly.500" p={2} borderRadius={{lg:"50%", base:"50%"}} align="center" lineHeight="120%">
                    <Icon as={IoLogoTwitter} fontSize="lg" fontWeight="bold" />
                </Box>
                  </Link>
               <Link href="https://www.instagram.com/privy.reviews" target="_blank">
               <Box bg="chantilly.500" p={2} borderRadius={{lg:"50%", base:"50%"}} align="center" lineHeight="120%">
                    <Icon as={IoLogoInstagram} fontSize="lg" fontWeight="bold" />
                </Box>
                </Link>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            w="full"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            pt={{ base: 10, md:10, lg: 10 }}
          >
          <Divider direction="horizontal" color="white"/>
         </Stack>
          <Stack
            w="full"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            pt={{ base: 10, md:20, lg: 20 }}
          >
            <Text fontSize="sm" color="white">
                Copyright @ 2022 Privy. All Rights Reserved.
            </Text>

            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 2, md: 6 }}
              fontWeight="semibold"
              color="gray.400"
            >
              <Stack direction={{base: 'column', md: 'row'}} spacing={{ base: 2, md: 6 }}>
                <Link as={InertiaLink} href={route('pages.privacy_policy')}>
                  Privacy Policy
                </Link>
                <Link as={InertiaLink} href={route('pages.terms_and_conditions')}>
                  Terms of Use
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Container>
        </Box>
    </>
  );
};

LandingPage.layout = (page) => <Layout children={page} />;

export default LandingPage;
