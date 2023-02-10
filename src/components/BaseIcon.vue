<template>
    <svg-icon
        type="mdi"
        :path="iconComponent"></svg-icon>
</template>
<script>
import SvgIcon from "@jamescoyle/vue-icon";
import {mdiChevronDown} from "@mdi/js";

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
