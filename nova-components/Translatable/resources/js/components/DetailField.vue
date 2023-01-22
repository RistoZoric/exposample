<template>
    <panel-item :field="field">
        <template slot="value">
            {{ title }}
        </template>
    </panel-item>
</template>

<script>
export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],

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
