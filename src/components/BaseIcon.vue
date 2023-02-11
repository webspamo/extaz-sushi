<template>
    <svg-icon
        type="mdi"
        :path="iconComponent"></svg-icon>
</template>
<script>
import SvgIcon from "@jamescoyle/vue-icon";
import {mdiChevronDown} from "@mdi/js";
import {mdiShoppingOutline} from "@mdi/js";
import {mdilPlus} from "@mdi/light-js";
import {mdilMinus} from "@mdi/light-js";

export default {
    name: "BaseIcon",
    components: {
        SvgIcon,
    },
    props: {
        name: String,
    },
    data() {
        return {
            icons: {
                "chevron-down": mdiChevronDown,
                "shopping-basket": mdiShoppingOutline,
                "plus-light": mdilPlus,
                "minus-light": mdilMinus,
            },
        };
    },
    computed: {
        iconComponent() {
            return this.icons[this.name];
        },
    },
};
</script>
<style lang="scss" scoped></style>
