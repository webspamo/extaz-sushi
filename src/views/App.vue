<template>
    <div class="content">
        <TheHeader />
        <router-view></router-view>
        <ShoppingCartModal />
        <TheFooter />
    </div>
</template>
<script>
import ShoppingCartModal from "../components/ShoppingCartModal.vue";
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
    name: "App",
    components: {TheHeader, TheFooter, ShoppingCartModal},
    data() {
        return {};
    },
};
</script>
<style lang="scss" scoped></style>
