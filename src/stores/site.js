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
                price: 440,
                options: {
                    name: "Обрати",
                    items: [
                        {
                            key: "losos",
                            name: "Лосось",
                            price: 10,
                            weight: 10,
                            image: ``
                        }
                    ]
                }
            },
        ],
    }),
    getters: {
        getMenuItemById: (state) => {
            return (itemId) => state.menuItems.find((item) => item.id === itemId)
        },
    },
});
