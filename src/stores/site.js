import {defineStore} from "pinia";

export const useSiteStore = defineStore("site", {
    state: () => ({
        startHours: "12:00",
        endHours: "21:00",
    }),
    getters: {},
});
