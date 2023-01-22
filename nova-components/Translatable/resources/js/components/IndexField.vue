<template>
    <span>{{ title }}</span>
</template>

<script>
export default {
    props: ['resourceName', 'field'],

    data() {
        return {
            title: null,
        };
    },

    created() {
        const value = JSON.parse(this.field.value);
        this.title = value[this.field.appLocale];
    },
};
</script>
