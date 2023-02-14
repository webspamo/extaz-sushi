<template>
    <div class="socials">
        <a class="social-link"></a>
        <a class="social-link"></a>
    </div>
</template>

<script>
export default {
    name: "SocialLinks",
    data() {
        return {};
    },
};
</script>
<style lang="scss">
.socials {
    display: flex;
    align-items: center;
    gap: 0.3125rem;
    .social-link {
        width: 25px;
        height: 25px;
        border: 1px solid red;
    }
}
</style>
