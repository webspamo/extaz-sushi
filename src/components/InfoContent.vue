<template>
    <div class="info-content container">
        <div
            class="info-card"
            v-for="card in cards"
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
        return {
            workingStartHours: null,
            workingEndHours: null,
            cards: [
                {
                    id: "deliveryInfo",
                    title: "Доставимо",
                    text: `до дверей ~60хв\n\nбезкоштовно\nпо Печерському р-ну\n+10 грн за кожен наступний км`,
                    iconName: "delivery",
                    imagePath: "/src/assets/icons/delivery-icon.svg",
                    imageAlt: "Delivery outline image",
                },
                {
                    id: "toGoInfo",
                    title: "Самовиніс",
                    text: "Печерський район,\n вул. Іоанна Павла || 7\n\nтільки за попереднім замовленням",
                    iconName: "location",
                    imagePath: "/src/assets/icons/to-go-icon.svg",
                    imageAlt: "Map point outline image",
                },
                {
                    id: "paymentInfo",
                    title: "Сплачуй зручно",
                    text: "готівкою при отриманні\nкарткою на сайті",
                    iconName: "payment",
                    imagePath: "/src/assets/icons/payment-icon.svg",
                    imageAlt: "Payment type outline image",
                },
                {
                    id: "workingHoursInfo",
                    title: "Працюємо",
                    text: `щодня\nз ${this.workingStartHours} до ${this.workingEndHours}`,
                    iconName: "hours",
                    imagePath: "/src/assets/icons/clock-icon.svg",
                    imageAlt: "Clock outline image",
                },
            ],
        };
    },

    computed: {
        ...mapState(useSiteStore, ["startHours", "endHours"]),
    },
    created() {
        this.workingStartHours = this.startHours;
        this.workingEndHours = this.endHours;
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
