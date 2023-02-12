import {createRouter, createWebHashHistory} from "vue-router";

import HomePage from "@/views/HomePage.vue";
import ClassicalPage from "@/views/ClassicalPage.vue";
import SpecialtyPage from "@/views/SpecialtyPage.vue";
import SetsPage from "@/views/SetsPage.vue";
import SushiPage from "@/views/SushiPage.vue";
import BakedPage from "@/views/BakedPage.vue";
import AddsPage from "@/views/AddsPage.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: HomePage,
        },
        {
            path: "/classical",
            component: ClassicalPage,
        },
        {
            path: "/specialty",
            component: SpecialtyPage,
        },
        {
            path: "/sets",
            component: SetsPage,
        },
        {
            path: "/sushi",
            component: SushiPage,
        },
        {
            path: "/baked",
            component: BakedPage,
        },
        {
            path: "/adds",
            component: AddsPage,
        },
    ],
});
