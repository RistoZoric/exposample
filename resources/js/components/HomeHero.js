import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useForm, usePage } from '@inertiajs/inertia-react';
import CanelaText from '@/components/UI/CanelaText';
import HomeHeroCategories from '@/components/HomeHeroCategories';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';

export default function HomeHero({ categories }) {
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  const {
    data, setData, get, processing, errors,
  } = useForm({
    q: '',
  });

  function handleSearch(event) {
    event.preventDefault();
    get(route('categories.search'));
  }

  return (
    <Box width={{ base: 'full', lg: '60%' }}>
      <Stack direction="column" spacing={8}>
        <CanelaText
          color="white"
          fontSize={{ base: '4xl', lg: '5xl' }}
          fontWeight="bold"
          as="h1"
          dangerouslySetInnerHTML={{ __html: lang.get('home.hero') }}
        />
        <form onSubmit={handleSearch}>
          <InputGroup size="lg">
            <Input
              type="type"
              variant="filled"
              color="gray.500"
              background="white"
              _hover={{ background: 'gray.100' }}
              _focus={{ background: 'gray.100' }}
              placeholder={lang.get('home.search_placeholder')}
              height={20}
              borderRadius={12}
              boxShadow="sm"
              value={data.q}
              onChange={(event) => setData('q', event.target.value)}
            />
            <InputRightElement height={20}>
              <SearchIcon color="gray.400" />
            </InputRightElement>
          </InputGroup>
        </form>
        <HomeHeroCategories categories={categories} />
      </Stack>
    </Box>
  );
}
