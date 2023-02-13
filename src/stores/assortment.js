import {defineStore} from "pinia";

const imagesPath = "/src/assets/images/"; // @/assets

export const useAssortmentStore = defineStore("assortment", {
    state: () => ({
        itemCategories: [
            {
                id: "classical",
                title: "Класичні",
                image: imagesPath + "classical_category-image.jpeg",
                containedItemsId: [],
            },
            {
                id: "specialty",
                title: "Фірмові",
                image: imagesPath + "specialty_category-image.jpeg",
                containedItemsId: [],
            },
            {
                id: "sets",
                title: "Сети",
                image: imagesPath + "sets_category-image.jpeg",
                containedItemsId: [],
            },
            {
                id: "baked",
                title: "Запечені",
                image: imagesPath + "baked_category-image.jpeg",
                containedItemsId: [],
            },
            {
                id: "sushi",
                title: "Суші",
                image: imagesPath + "sushi_category-image.jpeg",
                containedItemsId: [],
            },
            {
                id: "adds",
                title: "Додатки",
                image: imagesPath + "adds_category-image.jpeg",
                containedItemsId: [],
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
    },
});
