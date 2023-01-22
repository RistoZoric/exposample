import Lang from 'lang.js';
import messages from '@/messages';


export default function useLang(locale) { 

  return new Lang({ locale, messages, fallback:'en' });
}
