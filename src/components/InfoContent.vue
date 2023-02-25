<template>
    <div class="info-content container">
        <div
            class="info-card"
            v-for="card in infoCards"
            :key="card.id">
            <SvgCustomIcon
                class="card-icon"
                :name="card.iconName" />
            <h3 class="card-titile">
                {{ card.title }}
            </h3>
            <p class="card-text">
                {{ card.text }}
            </p>
        </div>
    </div>
</template>

<script>
import {mapState} from "pinia";
import {useSiteStore} from "../stores/site";

import SvgCustomIcon from "./SvgCustomIcon.vue";

export default {
    name: "InfoContent",
    components: {
        SvgCustomIcon,
    },
    data() {
        return {};
    },

    computed: {
        ...mapState(useSiteStore, ["infoCards"]),
    },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/_mixins";
.info-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.75rem 3.75rem;
}

.info-card {
    & > :not(:first-child) {
        text-align: center;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.card-titile {
    //second-row
    white-space: nowrap;
    text-transform: uppercase;
    font-size: 1.875rem; //
}

.card-text {
    font-size: 1.25rem;
    white-space: pre-line;
}
.card-icon {
    width: auto;
    height: 6.25rem;
    fill: mixins.$main-accent;
}
</style>
