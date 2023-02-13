<template>
    <div class="contacts-content container">
        <h2 class="contacts-title">{{ contacts.title }}</h2>
        <a
            :href="`tel:+38${contacts.phone}`"
            class="contacts-link"
            >{{ contacts.phone }}</a
        >
        <p>{{ contacts.text }}</p>
        <div class="socials">
            <div class="social"></div>
            <div class="social"></div>
        </div>
    </div>
</template>

<script>
import {mapState} from "pinia";
import {useSiteStore} from "../stores/site";

export default {
    name: "ContactsContent",
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

// В отдельнй компонент.
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
</style>
