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
                <li class="navigation-item">
                    <a
                        href="#"
                        class="navigation-link">
                        Меню
                        <BaseIcon name="chevron-down"></BaseIcon>
                    </a>
                </li>
            </ul>
        </nav>
        <MainLogo></MainLogo>
        <div class="header-additional">
            <div class="opening-hours">{{ startHours }} - {{ endHours }}</div>
            <div class="socials">
                <div class="social"></div>
                <div class="social"></div>
            </div>
        </div>
    </header>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import MainLogo from "./MainLogo.vue";

import {useSiteStore} from "../stores/site";
import {mapState} from "pinia";

export default {
    name: "TheHeader",
    components: {
        BaseIcon,
        MainLogo,
    },
    data() {
        return {};
    },

    computed: {
        ...mapState(useSiteStore, ["startHours", "endHours"]),
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

    .socials {
        display: flex;
        align-items: center;
        gap: 0.3125rem;
        .social {
            width: 25px;
            height: 25px;
            border: 1px solid red;
        }
    }
}

.opening-hours {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
