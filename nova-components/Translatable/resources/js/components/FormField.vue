<template>
    <default-field :field="field" :errors="errors" :show-help-text="showHelpText">
        <template slot="field">
            <div class="flex justify-start mb-2">
                <template v-for="key in Object.keys(locales)">
                    <button type="button" :class="getButtonClassNames(key)" @click="selectLocale(key)">
                        <span>{{ key }}</span>
                    </button>
                </template>
            </div>
            <template v-for="key in Object.keys(locales)">
                <div v-if="selectedLocale === key">
                    <input
                        type="text"
                        class="w-full form-control form-input form-input-bordered"
                        :class="errorClasses"
                        :placeholder="field.name"
                        v-model="locales[key]"
                        v-if="field.asText"
                    />
                    <textarea
                        class="w-full form-control form-input form-input-bordered py-3 h-auto"
                        :class="errorClasses"
                        :placeholder="field.name"
                        v-model="locales[key]"
                        v-if="field.asTextarea"
                    />
                </div>
            </template>
        </template>
    </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova';
import LocaleCode from 'locale-code';

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    data() {
        return {
            attribute: null,
            selectedLocale: null,
            locales: {},
        };
    },

    methods: {
        getButtonClassNames(locale) {
            const baseClassNames =
                'text-xs font-bold py-1 px-2 mr-1 rounded spacing flex items-center focus:outline-none';
            const stateClassNames =
                this.selectedLocale === locale
                    ? 'bg-white hover:bg-gray-100 text-black border-2 border-blue-400'
                    : 'bg-white hover:bg-gray-100 text-black border-2 border-gray-400';

            return `${baseClassNames} ${stateClassNames}`;
        },

        selectLocale(locale) {
            this.selectedLocale = locale;
        },

        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            const value = JSON.parse(this.field.value);

            this.attribute = this.field.attribute;
            this.selectedLocale = Object.keys(value)[0];
            this.locales = value;
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, JSON.stringify(this.locales));
        },
    },
};
</script>
