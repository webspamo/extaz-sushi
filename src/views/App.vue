<template>
    <div class="content">
        <TheHeader></TheHeader>

        <div class="menu-items">
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>

        <TheFooter />
    </div>
</template>
<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import MenuItem from "../components/MenuItem.vue";

export default {
    name: "App",
    components: { TheHeader, MenuItem, TheFooter },
    data() {
        return {};
    },
};
</script>
<style lang="scss" scoped>
.menu-items {
    display: flex;
    margin: 0 auto;
    gap: 1rem;
    max-width: 850px;

    .menu-item {
        width: 100%;
    }
}
</style>
