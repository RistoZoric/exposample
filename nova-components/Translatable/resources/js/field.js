import DetailField from './components/DetailField';
import FormField from './components/FormField';
import IndexField from './components/IndexField';

Nova.booting(Vue => {
    Vue.component('index-translatable', IndexField);
    Vue.component('detail-translatable', DetailField);
    Vue.component('form-translatable', FormField);
});
