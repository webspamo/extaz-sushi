import {defineStore} from "pinia";

const iconsPath = "/src/assets/icons/"; // @/assets

export const useSiteStore = defineStore("site", {
    state: () => ({
        startHours: "12:00",
        endHours: "21:00",
        phone: "0930551355",
    }),
    getters: {},
});
