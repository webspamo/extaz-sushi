import {defineStore} from "pinia";

const imagesPath = "/src/assets/images/"; // @/assets

export const useAssortmentStore = defineStore("assortment", {
    state: () => ({
        itemCategories: [
            {
                id: "classical",
                title: "Класичні",
                image: imagesPath + "classical_category-image.jpeg",
                containedItemsId: [
                    "philadelphia-roll",
                    "philadelphia-grill-roll",
                    "philadelphia-avocado-roll",
                    "philadelphia-grill-avocado-roll",
                    "philadelphia-eel-roll",
                    "philadelphia-shrimp-roll",
                    "philadelphia-sesam-roll",
                    "philadelphia-roe-roll",
                    "maki-roll",
                    "california-roll",
                ],
            },
            {
                id: "specialty",
                title: "Фірмові",
                image: imagesPath + "specialty_category-image.jpeg",
                containedItemsId: [
                    "luxury-roll",
                    "philadelphia-mango-roll",
                    "euphoria-roll",
                    "unagi-double-maki-roll",
                    "extaz-roll",
                    "green-dragon-roll",
                    "vega-roll",
                    "green-roll",
                    "dark-roll",
                    "kados-roll",
                ],
            },
            {
                id: "sets",
                title: "Сети",
                image: imagesPath + "sets_category-image.jpeg",
                containedItemsId: [
                    "corporate-set",
                    "salmon-set",
                    "philadelphia-set",
                    "firm-set",
                    "mix-set",
                    "trio-set",
                    "baked-set",
                ],
            },
            {
                id: "baked",
                title: "Запечені",
                image: imagesPath + "baked_category-image.jpeg",
                containedItemsId: [
                    "baked-salmon-roll",
                    "baked-shrimp-roll",
                    "baked-eel-roll",
                ],
            },
            {
                id: "sushi",
                title: "Суші",
                image: imagesPath + "sushi_category-image.jpeg",
                containedItemsId: [
                    "salmon-sushi",
                    "salmon-grill-sushi",
                    "tuna-sushi",
                    "shrimp-sushi",
                    "eel-sushi",
                    "hunkan-sushi",
                ],
            },
            {
                id: "adds",
                title: "Додатки",
                image: imagesPath + "adds_category-image.jpeg",
                containedItemsId: [
                    "soy-sauce-addition",
                    "ginger-addition",
                    "wasabi-addition",
                    "spicy-addition",
                    "nut-sauce-addition",
                    "unagi-sauce-addition",
                    "hiyashi-salad-addition",
                    "coca-cola-addition",
                    "coca-cola-zero-addition",
                    "fanta-addition",
                    "juice-assortment-addition",
                    "morshynska-addition",
                ],
            },
        ],
        menuItems: [
            //classical
            {
                id: "philadelphia-roll",
                name: "Філадельфія рол",
                defaultImage: imagesPath + "philadelphia-roll.jpg", //default
                description:
                    "Лосось або тунець на вибір, крем-сир, огірок, ікра лососева.",
                weight: 330,
                weightName: "grams",
                price: 355,
                currency: "uah",
                addons: {
                    name: "Риба",
                    items: [
                        {
                            id: "salmon",
                            name: "Лосось",
                            price: 0,
                            weight: 0,
                            image: imagesPath + "philadelphia-roll.jpg", //default
                        },
                        {
                            id: "tuna",
                            name: "Тунець",
                            price: -20,
                            weight: 0,
                            image: imagesPath + "",
                        },
                    ],
                },
            },
            {
                id: "philadelphia-grill-roll",
                name: "Філадельфія гриль",
                defaultImage: imagesPath + "philadelphia-grill-roll.jpg", //default
                description: "Обпалений лосось, крем-сир, огірок.",
                weight: 320,
                weightName: "grams",
                price: 350,
                currency: "uah",
            },
            {
                id: "philadelphia-avocado-roll",
                name: "Філадельфія з авокадо",
                defaultImage: imagesPath + "philadelphia-avocado-roll.jpg", //default
                description:
                    "Лосось або вугор на вибір, крем-сир, авокадо, ікра лососева.",
                weight: 330,
                weightName: "grams",
                price: 375,
                currency: "uah",
                addons: {
                    name: "Риба",
                    items: [
                        {
                            id: "salmon",
                            name: "Лосось",
                            price: 0,
                            weight: 0,
                            image: imagesPath + "philadelphia-avocado-roll.jpg", //default
                        },
                        {
                            id: "eel",
                            name: "Вугор",
                            price: 35,
                            weight: 0,
                            image: imagesPath + "",
                        },
                    ],
                },
            },
            {
                id: "philadelphia-grill-avocado-roll",
                name: "Філадельфія Гриль з авокадо",
                defaultImage:
                    imagesPath + "philadelphia-grill-avocado-roll.jpg", //default
                description: "Обпалений лосось, крем-сир, авокадо.",
                weight: 320,
                weightName: "grams",
                price: 365,
                currency: "uah",
            },
            {
                id: "philadelphia-eel-roll",
                name: "Філадельфія з вугром",
                defaultImage: imagesPath + "philadelphia-eel-roll.jpg", //default
                description: "Вугор, крем-сир, огірок, ікра лососева.",
                weight: 330,
                weightName: "grams",
                price: 415,
                currency: "uah",
            },
            {
                id: "philadelphia-shrimp-roll",
                name: "Філадельфія з креветкою",
                defaultImage: imagesPath + "philadelphia-shrimp-roll.jpg", //default
                description: "Креветки, крем-сир, огірок, ікра лососева.",
                weight: 330,
                weightName: "grams",
                price: 295,
                currency: "uah",
            },
            {
                id: "philadelphia-sesam-roll",
                name: "Філадельфія в кунжуті",
                defaultImage: imagesPath + "philadelphia-sesam-roll.jpg", //default
                description:
                    "Лосось або вугор на вибір, крем-сир, авокадо, огірок, кунжут.",
                weight: 300,
                weightName: "grams",
                price: 275,
                currency: "uah",
                addons: {
                    name: "Риба",
                    items: [
                        {
                            id: "salmon",
                            name: "Лосось",
                            price: 0,
                            weight: 0,
                            image: imagesPath + "philadelphia-sesam-roll.jpg", //default
                        },
                        {
                            id: "eel",
                            name: "Вугор",
                            price: 120,
                            weight: 0,
                            image:
                                imagesPath + "philadelphia-sesam-eel-roll.jpg",
                        },
                    ],
                },
            },
            {
                id: "philadelphia-roe-roll",
                name: "Філадельфія в ікрі",
                defaultImage: imagesPath + "philadelphia-roe-roll.jpg", //default
                description: "Риба на вибір, крем-сир, огірок, ікра тобіко.",
                weight: 320,
                weightName: "grams",
                price: 365,
                currency: "uah",
                addons: {
                    name: "Риба",
                    items: [
                        {
                            id: "salmon",
                            name: "Лосось",
                            price: 0,
                            weight: 0,
                            image: imagesPath + "philadelphia-roe-roll.jpg", //default
                        },
                        {
                            id: "eel",
                            name: "Вугор",
                            price: 95,
                            weight: 0,
                            image: imagesPath + "philadelphia-roe-eel-roll.jpg",
                        },
                        {
                            id: "shrimp",
                            name: "Креветка",
                            price: -5,
                            weight: 0,
                            image:
                                imagesPath + "philadelphia-roe-shrimp-roll.jpg",
                        },
                    ],
                },
            },
            {
                id: "maki-roll",
                name: "Макі рол",
                defaultImage: imagesPath + "maki-roll.jpg", //default
                description: "Риба на вибір.",
                weight: 120,
                weightName: "grams",
                price: 140,
                currency: "uah",
                addons: {
                    name: "Інгредієнт",
                    items: [
                        {
                            id: "salmon",
                            name: "Лосось",
                            price: 0,
                            weight: 0,
                            image: imagesPath + "maki-roll.jpg", //default
                        },
                        {
                            id: "eel",
                            name: "Вугор",
                            price: 75,
                            weight: 0,
                            image: imagesPath + "maki-eel-roll.jpg",
                        },
                        {
                            id: "shrimp",
                            name: "Креветка",
                            price: 40,
                            weight: 0,
                            image: imagesPath + "maki-shrimp-roll.jpg",
                        },
                        {
                            id: "tuna",
                            name: "Тунець",
                            price: 40,
                            weight: 0,
                            image: imagesPath + "maki-tuna-roll.jpg",
                        },
                        {
                            id: "avocado",
                            name: "Авокадо",
                            price: -30,
                            weight: 0,
                            image: imagesPath + "maki-avocado-roll.jpg",
                        },
                        {
                            id: "cucumber",
                            name: "Огірок",
                            price: -65,
                            weight: 0,
                            image: imagesPath + "maki-cucumber-roll.jpg",
                        },
                    ],
                },
            },
            {
                id: "california-roll",
                name: "Каліфорнія",
                defaultImage: imagesPath + "california-roll.jpg", //default
                description: "Риба на вибір, авокадо, огірок, ікра тобіко.",
                weight: 300,
                weightName: "grams",
                price: 425,
                currency: "uah",
                addons: {
                    name: "Риба",
                    items: [
                        {
                            id: "salmon",
                            name: "Лосось",
                            price: 0,
                            weight: 0,
                            image: imagesPath + "california-roll.jpg", //default
                        },
                        {
                            id: "shrimp",
                            name: "Креветка",
                            price: -5,
                            weight: 0,
                            image: imagesPath + "california-shrimp-roll.jpg",
                        },
                        {
                            id: "tuna",
                            name: "Тунець",
                            price: 10,
                            weight: 0,
                            image: imagesPath + "california-tuna-roll.jpg",
                        },
                    ],
                },
            },
            //specialty
            {
                id: "luxury-roll",
                name: "Люксовий рол",
                defaultImage: imagesPath + "luxury-roll.jpg", //default
                description:
                    "Риба на вибір, крем-сир, крабовий мікс, креветки, огірок, шрірача.",
                weight: 340,
                weightName: "grams",
                price: 360,
                currency: "uah",
                addons: {
                    name: "Риба",
                    items: [
                        {
                            id: "tuna",
                            name: "Тунець",
                            price: 0,
                            weight: 0,
                            image: imagesPath + "luxury-roll.jpg",
                        },
                        {
                            id: "salmon",
                            name: "Лосось",
                            price: 25,
                            weight: 0,
                            image: imagesPath + "luxury-salmon-roll.jpg", //default
                        },
                    ],
                },
            },
            {
                id: "philadelphia-mango-roll",
                name: "Філадельфія з манго",
                defaultImage: imagesPath + "philadelphia-mango-roll.jpg", //default
                description: "Лосось, манго, крем-сир.",
                weight: 310,
                weightName: "grams",
                price: 360,
                currency: "uah",
                addons: {
                    name: "Обрати",
                    items: [
                        {
                            id: "standart",
                            name: "Стандарт",
                            price: 0,
                            weight: 0,
                            image: imagesPath + "philadelphia-mango-roll.jpg", //default
                        },
                        {
                            id: "more-mango-less-cheese",
                            name: "Більше манго, менше сиру",
                            price: 30,
                            weight: 0,
                            image: "",
                        },
                    ],
                },
            },
            {
                id: "euphoria-roll",
                name: "Ейфорія рол",
                defaultImage: imagesPath + "euphoria-roll.jpg", //default
                description:
                    "Обпалений, карамелізований унагі соусом лосось, креветка, ікра тобіко, авокадо.",
                weight: 330,
                weightName: "grams",
                price: 475,
                currency: "uah",
            },
            {
                id: "unagi-double-maki-roll",
                name: "Унагі Дабл макі",
                defaultImage: imagesPath + "unagi-double-maki-roll.jpg", //default
                description:
                    "Вугор, крем-сир, огірок, унагі, ікра тобіко, кунжут.",
                weight: 300,
                weightName: "grams",
                price: 450,
                currency: "uah",
            },
            {
                id: "extaz-roll",
                name: "Екстаз рол",
                defaultImage: imagesPath + "extaz-roll.jpg", //default
                description:
                    "Креветки, крем-сир, огірок, крабовий мікс, лосось, вялений томат, фірмовий соус.",
                weight: 320,
                weightName: "grams",
                price: 335,
                currency: "uah",
                addons: {
                    name: "Інгредієнт",
                    items: [
                        {
                            id: "salmon",
                            name: "Лосось",
                            price: 0,
                            weight: 0,
                            image: imagesPath + "extaz-roll.jpg", //default
                        },
                        {
                            id: "tuna",
                            name: "Тунець",
                            price: 50,
                            weight: 0,
                            image: imagesPath + ".jpg",
                        },
                    ],
                },
            },
            {
                id: "green-dragon-roll",
                name: "Зелений дракон",
                defaultImage: imagesPath + "green-dragon-roll.jpg", //default
                description:
                    "Вугор, крем-сир, авокадо, шрірача, ікра тобіко, унагі, кунжут.",
                weight: 295,
                weightName: "grams",
                price: 395,
                currency: "uah",
            },
            {
                id: "vega-roll",
                name: "Вега рол",
                defaultImage: imagesPath + "vega-roll.jpg", //default
                description: "Авокадо, вялений томат, хіяші, огірок.",
                weight: 275,
                weightName: "grams",
                price: 210,
                currency: "uah",
            },
            {
                id: "green-roll",
                name: "Грін рол",
                defaultImage: imagesPath + "green-roll.jpg", //default
                description: "Лосось, авокадо, крабовий мікс.",
                weight: 295,
                weightName: "grams",
                price: 325,
                currency: "uah",
            },
            {
                id: "dark-roll",
                name: "Д`Арк рол",
                defaultImage: imagesPath + "dark-roll.jpg", //default
                description:
                    "Вугор, тунець, крабовий мікс, авокадо, ікра тобіко, унагі, кунжут. ",
                weight: 320,
                weightName: "grams",
                price: 515,
                currency: "uah",
            },
            {
                id: "kados-roll",
                name: "Кадос рол",
                defaultImage: imagesPath + "kados-roll.jpg", //default
                description:
                    "Тунець, хіяші, цибуля, огірок, фірмовий соус, горіховий соус, кунжут, ікра тобіко.",
                weight: 290,
                weightName: "grams",
                price: 295,
                currency: "uah",
            },
            //sets
            {
                id: "corporate-set",
                name: "Корпоративний сет",
                defaultImage: imagesPath + "corporate-set.png", //default
                description: "9 ролів, 72 шматочки.",
                containedItemsId: [],
                weight: 3000,
                weightName: "grams",
                price: 3399,
                currency: "uah",
            },
            {
                id: "salmon-set",
                name: "Сет Лосось",
                defaultImage: imagesPath + "salmon-set.jpg", //default
                containedItemsId: [],
                weight: 710,
                weightName: "grams",
                price: 1065,
                currency: "uah",
            },
            {
                id: "philadelphia-set",
                name: "Філадельфія сет",
                defaultImage: imagesPath + "philadelphia-set.jpg", //default
                containedItemsId: [],
                weight: 990,
                weightName: "grams",
                price: 995,
                currency: "uah",
            },
            {
                id: "firm-set",
                name: "Фірмовий сет",
                defaultImage: imagesPath + "firm-set.jpg", //default
                containedItemsId: [],
                weight: 1250,
                weightName: "grams",
                price: 1390,
                currency: "uah",
            },
            {
                id: "mix-set",
                name: "Мікс сет",
                defaultImage: imagesPath + "mix-set.jpg", //default
                containedItemsId: [],
                weight: 1050,
                weightName: "grams",
                price: 1230,
                currency: "uah",
            },
            {
                id: "trio-set",
                name: "Тріо сет",
                defaultImage: imagesPath + "trio-set.jpg", //default
                containedItemsId: [],
                weight: 900,
                weightName: "grams",
                price: 970,
                currency: "uah",
            },
            {
                id: "baked-set",
                name: "Запечений сет",
                defaultImage: imagesPath + "baked-set.jpg", //default
                containedItemsId: [],
                weight: 1050,
                weightName: "grams",
                price: 1190,
                currency: "uah",
            },
            //baked
            {
                id: "baked-salmon-roll",
                name: "Запечений рол з лососем",
                defaultImage: imagesPath + "baked-salmon-roll.jpg", //default
                description:
                    "Лосось, крем-сир, авокадо, ікра тобіко, сирна шапочка.",
                weight: 380,
                weightName: "grams",
                price: 430,
                currency: "uah",
            },
            {
                id: "baked-shrimp-roll",
                name: "Запечений рол з креветкою",
                defaultImage: imagesPath + "baked-shrimp-roll.jpg", //default
                description:
                    "Креветка, крем-сир, авокадо, ікра тобіко, сирна шапочка.",
                weight: 380,
                weightName: "grams",
                price: 420,
                currency: "uah",
            },
            {
                id: "baked-eel-roll",
                name: "Запечений рол з вугром",
                defaultImage: imagesPath + "baked-eel-roll.jpg", //default
                description: "Вугор, крем-сир, авокадо, кунжут, сирна шапочка.",
                weight: 340,
                weightName: "grams",
                price: 390,
                currency: "uah",
            },
            //susuhi
            {
                id: "salmon-sushi",
                name: "Суші з лососем",
                defaultImage: imagesPath + "salmon-sushi.jpg", //default
                weight: 40,
                weightName: "grams",
                price: 75,
                currency: "uah",
            },
            {
                id: "salmon-grill-sushi",
                name: "Суші з лососем гриль",
                defaultImage: imagesPath + "salmon-grill-sushi.jpg", //default
                weight: 40,
                weightName: "grams",
                price: 75,
                currency: "uah",
            },
            {
                id: "tuna-sushi",
                name: "Суші з тунцем",
                defaultImage: imagesPath + "tuna-sushi.jpg", //default
                weight: 40,
                weightName: "grams",
                price: 65,
                currency: "uah",
            },
            {
                id: "shrimp-sushi",
                name: "Суші з креветкою",
                defaultImage: imagesPath + "shrimp-sushi.jpg", //default
                weight: 40,
                weightName: "grams",
                price: 65,
                currency: "uah",
            },
            {
                id: "eel-sushi",
                name: "Суші з вугром",
                defaultImage: imagesPath + "eel-sushi.jpg", //default
                weight: 40,
                weightName: "grams",
                price: 70,
                currency: "uah",
            },
            {
                id: "hunkan-sushi",
                name: "Гункан",
                defaultImage: imagesPath + "hunkan-sushi.jpg", //default
                description:
                    "Риба на вибір, ікра тобіко, шрірача, японський майонез.",
                weight: 50,
                weightName: "grams",
                price: 90,
                currency: "uah",
                addons: {
                    name: "Риба",
                    items: [
                        {
                            id: "salmon",
                            name: "Лосось",
                            price: 0,
                            weight: 0,
                        },
                        {
                            id: "tuna",
                            name: "Тунець",
                            price: -10,
                            weight: 0,
                        },
                        {
                            id: "shrimp",
                            name: "Креветка",
                            price: -10,
                            weight: 0,
                        },
                        {
                            id: "eel",
                            name: "Вугор",
                            price: 30,
                            weight: 0,
                        },
                    ],
                },
            },
            //adds
            {
                id: "soy-sauce-addition",
                name: "Соєвий соус",
                defaultImage: imagesPath + "soy-sauce-addition.jpg", //default
                weight: 50,
                weightName: "grams",
                price: 15,
                currency: "uah",
            },
            {
                id: "ginger-addition",
                name: "Імбир",
                defaultImage: imagesPath + "ginger-addition.jpg", //default
                weight: 20,
                weightName: "grams",
                price: 15,
                currency: "uah",
            },
            {
                id: "wasabi-addition",
                name: "Васабі",
                defaultImage: imagesPath + "wasabi-addition.jpg", //default
                weight: 10,
                weightName: "grams",
                price: 10,
                currency: "uah",
            },
            {
                id: "spicy-addition",
                name: "Спайсі соус",
                defaultImage: imagesPath + "spicy-addition.jpg", //default
                weight: 30,
                weightName: "grams",
                price: 25,
                currency: "uah",
            },
            {
                id: "nut-sauce-addition",
                name: "Горіховий соус",
                defaultImage: imagesPath + "nut-sauce-addition.jpg", //default
                weight: 30,
                weightName: "grams",
                price: 25,
                currency: "uah",
            },
            {
                id: "unagi-sauce-addition",
                name: "Унагі соус",
                defaultImage: imagesPath + "unagi-sauce-addition.jpg", //default
                weight: 30,
                weightName: "grams",
                price: 25,
                currency: "uah",
            },
            {
                id: "hiyashi-salad-addition",
                name: "Хіяші салат",
                defaultImage: imagesPath + "hiyashi-salad-addition.jpg", //default
                weight: 120,
                weightName: "grams",
                price: 100,
                currency: "uah",
            },
            {
                id: "coca-cola-addition",
                name: "Кола",
                defaultImage: imagesPath + "coca-cola-addition.png", //default
                weight: 0.5,
                weightName: "liters",
                price: 35,
                currency: "uah",
            },
            {
                id: "coca-cola-zero-addition",
                name: "Кола Зеро",
                defaultImage: imagesPath + "coca-cola-zero-addition.png", //default
                weight: 0.5,
                weightName: "liters",
                price: 35,
                currency: "uah",
            },
            {
                id: "fanta-addition",
                name: "Фанта",
                defaultImage: imagesPath + "fanta-addition.png", //default
                weight: 0.5,
                weightName: "liters",
                price: 35,
                currency: "uah",
            },
            {
                id: "juice-assortment-addition",
                name: "Сік",
                defaultImage: imagesPath + "juice-assortment-addition.png", //default
                description: "в асортименті",
                weight: 1,
                weightName: "liters",
                price: 100,
                currency: "uah",
            },
            {
                id: "morshynska-addition",
                name: "Моршинська",
                defaultImage: imagesPath + "morshynska-addition.png", //default
                weight: 0.5,
                weightName: "liters",
                price: 25,
                currency: "uah",
                addons: {
                    name: "Обрати",
                    items: [
                        {
                            id: "light-sparkling",
                            name: "Cлабогазована",
                            price: 0,
                            weight: 0,
                        },
                        {
                            id: "no-sparkling",
                            name: "Негазована",
                            price: 0,
                            weight: 0,
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
        getAllId: (state) => {
            return state.menuItems.map((e) => e.id);
        },
    },
});
