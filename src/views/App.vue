<template>
    <div class="content">
        <TheHeader />

        <div class="menu-items">
            <MenuItem v-for="item in topMenuItems"
                :key="item.id"
                :name="item.name"
                :description="item.description"
                :weight="item.weight"
                :weight-name="item.weightName"
                :price="item.price"
                :currency="item.currency"
                :options="item.options" />
        </div>

        <TheFooter />
    </div>
</template>
<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import MenuItem from "../components/MenuItem.vue";

import { mapGetters } from "pinia";
import { useSiteStore } from "@/stores/site";

export default {
    name: "App",
    components: { TheHeader, MenuItem, TheFooter },
    data() {
        return {
            topMenuItemIds: ["euphoria", "euphoria", "euphoria", "euphoria", "euphoria"]
        };
    },
    computed: {
        ...mapGetters(useSiteStore, ["getMenuItemById"]),

        topMenuItems() {
            const items = [];

            for (const itemId of this.topMenuItemIds) {
                const item = this.getMenuItemById(itemId);

                if (!item) continue;

                items.push(item);
            }

            return items;
        }
    },
};
</script>
<style lang="scss" scoped>
.menu-items {
    display: flex;
    margin: 0 auto;
    gap: 1rem;
    max-width: 850px;
    padding: 1rem;
    flex-wrap: wrap;

    .menu-item {
        width: 100%;
    }
}
</style>
