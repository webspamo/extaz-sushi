<template>
    <a
        class="social-link"
        :href="href">
        <img
            :src="iconSrc"
            :alt="iconAlt" />
    </a>
</template>

<script>
export default {
    name: "SocialLinks",
    props: {
        href: String,
        iconSrc: String,
        iconAlt: String,
    },
    data() {
        return {};
    },
};
</script>
<style lang="scss">
.social-link {
    border: 1px solid red;
}
</style>
