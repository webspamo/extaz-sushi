import {defineStore} from "pinia";

const imagesPath = "@/assets/images/";

export const useAssortmentStore = defineStore("assortment", {
    state: () => ({
        menuCategories: [
            {
                id: "Classical",
                title: "Класичні",
                containedItemsId: "",
            },
            {
                id: "Specialty",
                title: "Фірмові",
                containedItemsId: "",
            },
            {
                id: "Sets",
                title: "Сети",
                containedItemsId: "",
            },
            {
                id: "Sushi",
                title: "Суші",
                containedItemsId: "",
            },
            {
                id: "Baked",
                title: "Запечені",
                containedItemsId: "",
            },
            {
                id: "Adds",
                title: "Додатки",
                containedItemsId: "",
            },
        ],
        menuItems: [
            {
                id: "euphoria",
                name: "Ейфорія рол",
                image: imagesPath + "sushi-1.jpg",
                description:
                    "Обпалений, карамелізований унагі соусом лосось, креветка, ікра тобіко, авокадо.",
                weight: 330,
                weightName: "grams",
                price: 440,
                currency: "uah",
                addons: {
                    name: "Обрати",
                    items: [
                        {
                            id: "tuna",
                            name: "Тунець",
                            price: 50,
                            weight: 40,
                            image: ``,
                        },
                        {
                            id: "losos",
                            name: "Лосось",
                            price: 10,
                            weight: 10,
                            image: ``,
                        },

                        {
                            id: "igor",
                            name: "Вугор",
                            price: -10,
                            weight: 10,
                            image: ``,
                        },
                    ],
                },
            },
        ],
    }),
    getters: {
        getMenuItemById: (state) => {
            return (itemId) =>
                state.menuItems.find((item) => item.id === itemId);
        },
        getAllCategoriesTitle: (state) => {
            let categories = [];
            state.menuCategories.forEach((category) => {
                for (const key in category) {
                    if (key === "title") categories.push(category[key]);
                }
            });
            return categories;
        },
    },
});
