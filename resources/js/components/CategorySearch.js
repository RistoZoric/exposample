import {
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useForm, usePage } from '@inertiajs/inertia-react';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';

export default function CategorySearch() {
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
    <form onSubmit={handleSearch}>
      <InputGroup size="lg" width={'65%'} margin={'0 auto'}>
        <Input
          type="type"
          variant="filled"
          color="gray.500"
          background="white"
          _hover={{ background: 'glacier.100' }}
          _focus={{ background: 'glacier.100' }}
          _placeholder={{ color: 'gray.400' }}
          placeholder={lang.get('home.search_placeholder')}
          height={16}
          borderRadius={12}
          boxShadow="sm"
          value={data.q}
          onChange={(event) => setData('q', event.target.value)}
        />
        <InputRightElement height={16}>
          <SearchIcon color="glacier.400" />
        </InputRightElement>
      </InputGroup>
    </form>
  );
}
