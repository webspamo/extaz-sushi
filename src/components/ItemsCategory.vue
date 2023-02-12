<template>
    <div class="items-category"></div>
</template>

<script>
export default {
    name: "MenuItem",
    components: {},
    data() {
        return {};
    },
};
</script>

<style lang="scss">
@use "@/assets/styles/_mixins";

.items-category {
    background-color: mixins.$main-background-color;
}
</style>
