<template>
    <div class="contacts-content container">
        <h2 class="contacts-title">{{ contacts.title }}</h2>
        <a
            :href="`tel:+38${contacts.phone}`"
            class="contacts-link"
            >{{ contacts.phone }}</a
        >
        <p>{{ contacts.text }}</p>

        <div class="social">
            <a
                class="social-link"
                href="#">
                <SvgCustomIcon
                    class="social-icon"
                    name="outline-facebook" />
            </a>
            <a
                class="social-link"
                href="#">
                <SvgCustomIcon
                    class="social-icon"
                    name="outline-instagram" />
            </a>
        </div>
    </div>
</template>

<script>
import {mapState} from "pinia";
import {useSiteStore} from "../stores/site";

import SvgCustomIcon from "./SvgCustomIcon.vue";

export default {
    name: "ContactsContent",
    components: {
        SvgCustomIcon,
    },
    data() {
        return {
            contacts: {
                id: "contacts",
                title: "Контакти",
                phone: null,
                text: "Доставка по Києву",
            },
        };
    },
    computed: {
        ...mapState(useSiteStore, ["phone"]),
    },
    created() {
        this.contacts.phone = this.phone;
    },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/_mixins";
.contacts-content {
    font-size: 1.625rem;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.contacts-link {
}

.contacts-title {
    font-size: 2.625rem;
    line-height: 1.23;
}

.social {
    &-icon {
        width: 2rem;
        height: 2rem;
        fill: mixins.$main-accent;
    }
}
</style>
