<template>
    <header class="header">
        <nav class="header-navigation">
            <ul class="navigation-list">
                <li class="navigation-item">
                    <a
                        href="#"
                        class="navigation-link">
                        Доставка та оплата
                    </a>
                </li>
                <li class="navigation-item navigation-dropdown">
                    <button
                        @click="isActive = !isActive"
                        class="navigation-link">
                        Меню
                        <BaseIcon name="chevron-down"></BaseIcon>
                    </button>
                    <nav
                        class="navigation-dropdown-content"
                        :class="{active: isActive}">
                        <router-link
                            class="navigation-dropdown-link"
                            v-for="category in itemCategories"
                            :key="category.id"
                            :to="`/${category.id}`">
                            {{ category.title }}
                        </router-link>
                    </nav>
                </li>
            </ul>
        </nav>
        <MainLogo></MainLogo>
        <div class="header-additional">
            <div class="opening-hours">{{ startHours }} - {{ endHours }}</div>
            <SocialLinks />
        </div>
    </header>
</template>

<script>
import {useSiteStore} from "../stores/site";
import {useAssortmentStore} from "../stores/assortment";
import {mapState} from "pinia";

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
        return {
            isActive: false,
        };
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

    & > * {
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
            transition: color 150ms ease-in-out, opacity 150ms ease-in-out;

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
            top: calc(100% + 1rem); //connected (*)
            left: -55%;
            padding: 1.5rem 2.5rem;

            border-radius: 30px;
            background-color: white;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
            opacity: 0;
            pointer-events: none;
            transform: translateY(-5%);
            transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            &:before {
                content: "";
                position: absolute;
                top: -1rem; // remove gap after navigation-dropdown (*)
                height: 1rem; //connected (*)
                width: 100%;
            }
        }

        &:hover .navigation-dropdown-content,
        .active {
            pointer-events: auto;
            opacity: 1;
            transform: translateY(0);
        }

        .navigation-dropdown-link {
            color: black;
            text-transform: uppercase;
            transition: color 250ms ease-in-out;
            &:hover {
                color: mixins.$main-accent;
            }
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
