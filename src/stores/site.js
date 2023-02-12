import { defineStore } from "pinia";

const imagesPath = "@/assets/images/";

export const useSiteStore = defineStore("site", {
    state: () => ({
        startHours: "12:00",
        endHours: "21:00",
        menuItems: [
            {
                id: "euphoria",
                name: "Ейфорія рол",
                image: imagesPath + "sushi-1.jpg",
                description: "Обпалений, карамелізований унагі соусом лосось, креветка, ікра тобіко, авокадо.",
                weight: 330,
                weightName: "grams",
                price: 440,
                currency: "uah",
                addons: {
                    name: "Обрати",
                    items: [
                        {
                            key: "tuna",
                            name: "Тунець",
                            price: 50,
                            weight: 40,
                            image: ``
                        },
                        {
                            key: "losos",
                            name: "Лосось",
                            price: 10,
                            weight: 10,
                            image: ``
                        },

                        {
                            key: "igor",
                            name: "Вугор",
                            price: -10,
                            weight: 10,
                            image: ``
                        }
                    ]
                },
            },
        ],
    }),
    getters: {
        getMenuItemById: (state) => {
            return (itemId) => state.menuItems.find((item) => item.id === itemId)
        },
    },
});
