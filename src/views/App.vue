<template>
    <div class="content">
        <TheHeader />
        <router-view></router-view>
        <TheFooter />
    </div>
</template>
<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
    name: "App",
    components: {TheHeader, TheFooter},
    data() {
        return {};
    },
};
</script>
<style lang="scss" scoped></style>
