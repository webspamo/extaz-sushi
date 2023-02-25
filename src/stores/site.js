import {defineStore} from "pinia";

const iconsPath = "/src/assets/icons/"; // @/assets

const startHours = "12:00";
const endHours = "21:00";

export const useSiteStore = defineStore("site", {
    state: () => ({
        startHours: startHours,
        endHours: endHours,
        phone: "0930551355",
        infoCards: [
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
                text: `щодня\nз ${startHours} до ${endHours}`,
                iconName: "hours",
                imagePath: "/src/assets/icons/clock-icon.svg",
                imageAlt: "Clock outline image",
            },
        ],
    }),
    getters: {},
});
