<template>
    <header class="header">
        <nav class="header-navigation">
            <div class="navigation-list">
                <div class="navigation-item">
                    <a href="#"
                        class="navigation-link">
                        Доставка та оплата
                    </a>
                </div>
                <div class="navigation-item navigation-dropdown">
                    <a href="#"
                        class="navigation-link">
                        Меню
                        <BaseIcon name="chevron-down"></BaseIcon>
                    </a>
                    <div class="navigation-dropdown-content">
                        <div class="navigation-dropdown-link"
                            v-for="category in itemCategories"
                            :key="category.id">
                            <router-link :to="`/${category.id}`">
                                {{ category.title }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <MainLogo></MainLogo>
        <div class="header-additional">
            <div class="opening-hours">{{ startHours }} - {{ endHours }}</div>
            <SocialLinks />
        </div>
    </header>
</template>

<script>
import { useSiteStore } from "../stores/site";
import { useAssortmentStore } from "../stores/assortment";
import { mapState } from "pinia";

import BaseIcon from "./BaseIcon.vue";
import MainLogo from "./MainLogo.vue";
import SocialLinks from "./SocialLinks.vue";

export default {
    name: "TheHeader",
    components: {
        BaseIcon,
        MainLogo,
        SocialLinks,
    },
    data() {
        return {};
    },

    computed: {
        ...mapState(useSiteStore, ["startHours", "endHours"]),
        ...mapState(useAssortmentStore, ["itemCategories"]),
    },
};
</script>
<style lang="scss" scoped>
@use "@/assets/styles/_mixins.scss";

.header {
    height: 75px;
    padding: 0 1.25rem;
    background-color: mixins.$main-bg-color;

    display: flex;
    justify-content: space-between;

    &>* {
        flex-grow: 1;
        flex-basis: 0;
    }
}

.header-navigation {
    display: flex;
    align-items: center;

    .navigation-list {
        margin: 0;
        padding: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;

        .navigation-item {
            display: flex;
            align-items: center;
        }

        .navigation-link {
            transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;

            display: flex;
            align-items: center;
            text-transform: uppercase;

            &:hover {
                color: #00b3ff;
                opacity: 0.9;
            }
        }
    }

    .navigation-dropdown {
        position: relative;

        &-content {
            position: absolute;
            z-index: 1;

            display: none;

            top: 0;
            left: 50%;
            transform: translate(-50%);

            margin-top: 2rem;

            padding: 1.5rem;
            border-radius: 30px;
            background-color: lightblue;
        }

        &:hover {
            .navigation-dropdown-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }
        }

        .navigation-dropdown-link a {
            color: black;
        }
    }
}

.logo-wrapper {
    display: flex;
    justify-content: center;
}

.header-additional {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
}

.opening-hours {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
