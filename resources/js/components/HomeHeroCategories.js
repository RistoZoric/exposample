import {
  Link,
  Text,
  Icon,
  Wrap,
  Stack,
  WrapItem,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react';
import {
  FaMapMarkerAlt, FaKissWinkHeart, FaRainbow, FaInfoCircle,
} from 'react-icons/fa';
import {
  ImTrophy,
} from 'react-icons/im';
import {
  TiChartLine,
} from 'react-icons/ti';
import {
  BiDumbbell,
} from 'react-icons/bi';
import {
  AiFillVideoCamera,
} from 'react-icons/ai';
import {
  IoFastFood,
  IoSparkles,
} from 'react-icons/io5';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';

const IconToComponentMap = {
  kiss: FaKissWinkHeart,
  rainbow: FaRainbow,
  dumbbell: BiDumbbell,
  camera: AiFillVideoCamera,
  food: IoFastFood,
  sparkles: IoSparkles,
};

const renderIconToComponent = (icon) => {
  if (typeof IconToComponentMap[icon] !== 'undefined') {
    return IconToComponentMap[icon];
  }
  return FaInfoCircle;
};

export default function HomeHeroCategories({ categories }) {
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  return (
    <>
      <Stack direction="row" justify="space-between" mb={7}>
        <Text
          color="white"
          fontWeight="bold"
        >
          {lang.get('home.categories.title')}
        </Text>
        <Link
          as={InertiaLink}
          href={route('categories.index')}
          color="white"
          fontWeight="bold"
        >
          {lang.get('home.categories.view_all')}
        </Link>
      </Stack>
      <Wrap spacing={2}>
        <WrapItem>
          <LinkBox
            width={{ base: '85px', md: '100px' }}
            background="white"
            borderRadius="25px"
            boxShadow="sm"
            p={{ base: 3, md: 5 }}
            transition="all .2s"
            _hover={{ backgroundColor: 'glacier.100' }}
          >
            <LinkOverlay
              as={InertiaLink}
              href={route('categories.top_rated')}
            >
              <Stack direction="column" spacing={1} align="center">
                <Icon as={ImTrophy} height={5} width={5} color="gray.400" mb={2} />
                <Text fontSize={11} fontWeight="bold">{lang.get('home.categories.top_rated')}</Text>
              </Stack>
            </LinkOverlay>
          </LinkBox>
        </WrapItem>
        <WrapItem>
          <LinkBox
            width={{ base: '85px', md: '100px' }}
            background="white"
            borderRadius="25px"
            boxShadow="sm"
            p={{ base: 3, md: 5 }}
            transition="all .2s"
            _hover={{ backgroundColor: 'glacier.100' }}
          >
            <LinkOverlay
              as={InertiaLink}
              href={route('categories.near_you')}
            >
              <Stack direction="column" spacing={1} align="center">
                <Icon as={FaMapMarkerAlt} height={5} width={5} color="gray.400" mb={2} />
                <Text fontSize={11} fontWeight="bold">{lang.get('home.categories.near_you')}</Text>
              </Stack>
            </LinkOverlay>
          </LinkBox>
        </WrapItem>
        <WrapItem>
          <LinkBox
            width={{ base: '85px', md: '100px' }}
            background="white"
            borderRadius="25px"
            boxShadow="sm"
            p={{ base: 3, md: 5 }}
            transition="all .2s"
            _hover={{ backgroundColor: 'glacier.100' }}
          >
            <LinkOverlay
              as={InertiaLink}
              href={route('categories.featured')}
            >
              <Stack direction="column" spacing={1} align="center">
                <Icon as={TiChartLine} height={5} width={5} color="gray.400" mb={2} />
                <Text fontSize={11} fontWeight="bold">{lang.get('home.categories.featured')}</Text>
              </Stack>
            </LinkOverlay>
          </LinkBox>
        </WrapItem>
        {categories.map((category) => (
          <WrapItem key={category.id}>
            <LinkBox
              width={{ base: '85px', md: '100px' }}
              background="white"
              borderRadius="25px"
              boxShadow="sm"
              p={{ base: 3, md: 5 }}
              transition="all .2s"
              _hover={{ backgroundColor: 'glacier.100' }}
            >
              <LinkOverlay
                as={InertiaLink}
                href={route('categories.view', category.slug)}
              >
                <Stack w="full" direction="column" spacing={1} align="center" justify="center">
                  <Icon as={renderIconToComponent(category.icon)} height={5} width={5} color="gray.400" mb={2} />
                  <Text
                    fontSize={11}
                    fontWeight="bold"
                    textAlign="center"
                  >
                    {category.name}
                  </Text>
                </Stack>
              </LinkOverlay>
            </LinkBox>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
}
