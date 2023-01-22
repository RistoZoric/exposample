import {
  FormLabel,
  Switch,
  FormControl,
} from '@chakra-ui/react';
import { usePage } from '@inertiajs/inertia-react';
import useLang from '@/utils/useLang';

export default function MyPlanYearlySwitch({ isYearly, handleChange }) {
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="is-yearly" mb="0" fontWeight="semibold">
        {isYearly ? lang.get('my_plan.yearly') : lang.get('my_plan.monthly')}
      </FormLabel>
      <Switch
        id="is-yearly"
        size="md"
        colorScheme="glacier"
        isChecked={isYearly}
        onChange={handleChange}
      />
    </FormControl>
  );
}
