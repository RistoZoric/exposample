import {
  Box,
  Button,
  Container,
  Input,
  Stack,
  Text,
  VStack,
  Icon,
} from '@chakra-ui/react';
import { IoArrowDown } from 'react-icons/io5';
import { scroller } from 'react-scroll';
import { useForm, usePage } from '@inertiajs/inertia-react';
import CanelaText from '@/components/UI/CanelaText';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';

export default function WhyHero() {
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  const {
    data, setData, get, processing, errors,
  } = useForm({
    q: '',
  });

  const scrollToPlansSection = () => {
    scroller.scrollTo('plans-section', {
      duration: 1500,
      delay: 50,
      smooth: true,
      offset: -200,
    });
  };

  function handleSearch(event) {
    event.preventDefault();
    get(route('categories.search'));
  }

  return (
    <>
      <Container
        as={VStack}
        maxWidth="8xl"
        px={{ base: 6, md: 12, xl: 24 }}
        py={16}
      >
        <Box width={{ base: 'full', lg: '60%' }}>
          <Stack
            direction="column"
            spacing={12}
            align="center"
            justify="center"
            textAlign="center"
          >
            <VStack spacing={4}>
              <CanelaText
                color="black"
                fontSize={{ base: '5xl', md: '6xl' }}
                fontWeight="bold"
                as="h1"
                dangerouslySetInnerHTML={{ __html: lang.get('creators.hero.title') }}
              />
              <Text fontSize={{ base: 'md', md: 'lg' }} color="black">
                {lang.get('creators.hero.subtitle')}
              </Text>
            </VStack>
            <Box
              width="full"
              background="whiteAlpha.700"
              borderRadius={24}
              p={5}
            >
              <form onSubmit={handleSearch}>
                <Stack direction="row" spacing={6} align="center">
                  <Input
                    type="text"
                    size="lg"
                    variant="filled"
                    color="gray.500"
                    background="white"
                    _hover={{ background: 'gray.100' }}
                    _focus={{ background: 'gray.100' }}
                    placeholder={lang.get('creators.hero.search_placeholder')}
                    borderRadius={24}
                    value={data.q}
                    onChange={(event) => setData('q', event.target.value)}
                    fontSize={{base:"xs",md:"md",lg:"lg"}}
                  />
                  <Button
                    type="submit"
                    colorScheme="chantilly"
                    size="lg"
                    borderRadius={{base:22,md:22,lg:24}}
                  >
                    <Text fontSize={{base:"xs",md:"md",lg:"lg"}} px={{base:5,md:3,lg:3}}>{lang.get('creators.hero.button')}</Text>
                  </Button>
                </Stack>
              </form>
            </Box>
          </Stack>
        </Box>
      </Container>
      <Box p={10}>
        <Icon
          as={IoArrowDown}
          color="white"
          fontSize="4xl"
          cursor="pointer"
          transition="transform .5s"
          _hover={{ transform: 'scale(1.5)' }}
          onClick={scrollToPlansSection}
        />
      </Box>
    </>
  );
}
