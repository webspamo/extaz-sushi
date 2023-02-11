<template>
    <div class="logo-wrapper">
        <a href="">
            <img :src="image"
                alt="Extazsushi main logo"
                class="logo-img" />
        </a>
    </div>
</template>

<script>
import HorizontalLogo from "@/assets/images/extazsushi_logo.svg";
import VerticalLogo from "@/assets/images/extazsushi_logo_vertical.svg";

export default {
    name: "MainLogo",
    props: {
        orientation: {
            type: String,
            default: "horizontal",
            enum: ["horizontal", "vertical"]
        }
    },
    data() {
        return {
            images: {
                "horizontal": HorizontalLogo,
                "vertical": VerticalLogo
            }
        };
    },
    computed: {
        image() {
            return this.images[this.orientation];
        }
    },
};
</script>

<style lang="scss">
.logo-wrapper {}

.logo-img {
    height: auto;
    width: 160px;
    max-width: 160px;
}
</style>
