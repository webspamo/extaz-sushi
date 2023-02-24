<template>
    <div class="contacts-content container">
        <h2 class="contacts-title">{{ contacts.title }}</h2>
        <a
            :href="`tel:+38${contacts.phone}`"
            class="contacts-link"
            >{{ contacts.formattedPhone }}</a
        >
        <p class="contacts-text">{{ contacts.text }}</p>

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
                formattedPhone: "",
            },
        };
    },
    computed: {
        ...mapState(useSiteStore, ["phone"]),
    },
    created() {
        this.contacts.phone = this.phone;
        this.contacts.formattedPhone = `(${this.phone.substring(
            0,
            3
        )}) ${this.phone.substring(3, 6)} ${this.phone.substring(
            6,
            8
        )} ${this.phone.substring(8)}`;
    },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/_mixins";
.contacts-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > *:not(:last-child) {
        margin-bottom: 2.8125rem;
    }
}
.contacts-title {
    font-size: 2.625rem;
    line-height: 1.23;
}

.contacts-link {
    font-size: 1.625rem;
}
.contacts-text {
    font-size: 1.625rem;
}

.social {
    &-icon {
        width: 2rem;
        height: 2rem;
        fill: mixins.$main-accent;
    }
}
</style>
