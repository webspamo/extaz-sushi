<template>
    <div class="info-content container">
        <div
            class="info-card"
            v-for="card in cards"
            :key="card.id">
            <img
                :src="card.imagePath"
                :alt="card.imageAlt" />
            <h3 class="card-titile">
                {{ card.title }}
            </h3>
            <p>
                {{ card.text }}
            </p>
        </div>
    </div>
</template>

<script>
import {mapState} from "pinia";
import {useSiteStore} from "../stores/site";

export default {
    name: "InfoContent",
    data() {
        return {
            workingStartHours: null,
            workingEndHours: null,
            cards: [
                {
                    id: "deliveryInfo",
                    title: "Доставимо",
                    text: "до дверей ~60хв безкоштовно по Печерському р-ну +10 грн за кожен наступний км",
                    imagePath: "/src/assets/icons/delivery-icon.svg",
                    imageAlt: "Delivery outline image",
                },
                {
                    id: "toGoInfo",
                    title: "Самовиніс",
                    text: "Печерський район, вул. Іоанна Павла || 7 Тільки за попереднім замовленням",
                    imagePath: "/src/assets/icons/to-go-icon.svg",
                    imageAlt: "Map point outline image",
                },
                {
                    id: "paymentInfo",
                    title: "Сплачуй зручно",
                    text: "готівкою при отриманні карткою на сайті",
                    imagePath: "/src/assets/icons/payment-icon.svg",
                    imageAlt: "Payment type outline image",
                },
                {
                    id: "workingHoursInfo",
                    title: "Працюємо",
                    text: `щодня з ${this.workingStartHours} до ${this.workingEndHours}`,
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
}

.info-card {
    width: 255px;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.card-titile {
    text-transform: uppercase;
    font-size: 1.875rem;
}
</style>
