<template>
    <footer>
        <MainLogo orientation="vertical" />

        <nav>
            <a class="page active">Головна</a>
            <a class="page">Доставка і оплата</a>
            <a class="page">Договір публічної оферти</a>
        </nav>

        <div class="bottom-row">
            <div class="copyright">© 2023 Extaz Sushi</div>
            <div class="socials">
                <SocialLinks
                    v-for="link in socialLinks"
                    :key="link.socialMedia"
                    :href="link.href"
                    :icon-src="link.iconSrc"
                    :icon-alt:="link.iconAlt" />
            </div>

            <div class="to-top">Нагору ↑</div>
        </div>
    </footer>
</template>

<script>
import {mapState} from "pinia";
import {useSiteStore} from "@/stores/site";

import MainLogo from "./MainLogo.vue";
import SocialLinks from "./SocialLinks.vue";

export default {
    name: "TheFooter",
    components: {MainLogo, SocialLinks},
    data() {
        return {
            iconType: "round",
        };
    },
    computed: {
        ...mapState(useSiteStore, ["getSocialLinksByIconsType"]),
        socialLinks() {
            return this.getSocialLinksByIconsType("round");
        },
    },
    created() {
        console.log(this.socialLinks);
    },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/_mixins";

footer {
    background-color: black;

    padding-top: 6rem;
    padding-bottom: 4rem;

    display: flex;
    flex-direction: column;

    .logo-wrapper {
        margin: 0 auto;

        .logo-img {
            width: 250px;
            height: 250px;
        }
    }

    @include mixins.below(sm) {
        padding-top: 3rem;
        padding-bottom: 3rem;

        .logo-img {
            width: 200px;
            height: 200px;
        }
    }

    nav {
        display: flex;
        justify-content: center;

        gap: 0.625rem;
        margin: 0 auto;
        margin-top: 4rem;

        @include mixins.below(tablet) {
            flex-wrap: wrap;
        }

        .page {
            background-color: mixins.$secondary-accent;
            padding: 0.625rem 1rem;
            border-radius: 30px;
            color: white;
            font-weight: 400;
            text-transform: uppercase;
            cursor: pointer;

            font-size: 0.9rem;

            &.active {
                background-color: mixins.$main-accent;
                color: black;
            }

            @include mixins.below(sm) {
                padding: 0.4rem 0.8rem;
            }
        }
    }

    .bottom-row {
        margin-top: 4rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        padding: 0 3rem;

        & > * {
            flex-grow: 1;
            flex-basis: 0;
        }

        @include mixins.below(sm) {
            flex-direction: column;

            .socials {
                order: 1;
            }

            .copyright {
                order: 2;
            }

            .to-top {
                order: 3;
            }
        }

        .copyright,
        .to-top {
            color: mixins.$main-accent;
            font-weight: 600;
            font-size: 1.1rem;
        }

        .socials {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.3125rem;

            padding: 1rem;
            border: 1px solid red;

            .social-link {
                //  in Component
                width: 2rem;
                height: 2rem;
                color: mixins.$main-accent;
            }
        }

        .to-top {
            display: flex;
            justify-content: flex-end;
        }
    }
}
</style>
