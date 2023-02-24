import {createRouter, createWebHashHistory} from "vue-router";

import HomePage from "@/views/HomePage.vue";
import ClassicPage from "@/views/ClassicPage.vue";
import SpecialtyPage from "@/views/SpecialtyPage.vue";
import SetsPage from "@/views/SetsPage.vue";
import SushiPage from "@/views/SushiPage.vue";
import BakedPage from "@/views/BakedPage.vue";
import AddsPage from "@/views/AddsPage.vue";
import DeliveryPaymentPage from "@/views/DeliveryPaymentPage.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: HomePage,
        },
        {
            path: "/classic",
            component: ClassicPage,
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
        {
            path: "/delivery&payment",
            component: DeliveryPaymentPage,
        },
    ],
});
