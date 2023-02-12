<template>
    <main>
        <div class="menu-items">
            <MenuItem
                v-for="item in topMenuItems"
                :key="item.id"
                :name="item.name"
                :description="item.description"
                :weight="item.weight"
                :weight-name="item.weightName"
                :price="item.price"
                :currency="item.currency"
                :options="item.options" />
        </div>
        <div class="items-categories">
            <ItemsCategory v-for="category in getAllCategoriesTitle" />
        </div>
    </main>
</template>
<script>
import MenuItem from "../components/MenuItem.vue";
import ItemsCategory from "../components/ItemsCategory.vue";

import {mapState} from "pinia";
import {useSiteStore} from "@/stores/site";
import {useAssortmentStore} from "@/stores/assortment";

export default {
    name: "HomePage",
    components: {
        MenuItem,
        ItemsCategory,
    },
    data() {
        return {
            topMenuItemIds: [
                "euphoria",
                "euphoria",
                "euphoria",
                "euphoria",
                "euphoria",
            ],
        };
    },
    computed: {
        ...mapState(useAssortmentStore, [
            "getMenuItemById",
            "getAllCategoriesTitle",
        ]),

        topMenuItems() {
            const items = [];

            for (const itemId of this.topMenuItemIds) {
                const item = this.getMenuItemById(itemId);

                if (!item) continue;

                items.push(item);
            }

            return items;
        },
    },
};
</script>
<style lang="scss" scoped>
@use "@/assets/styles/_mixins";
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

.items-categories {
    background-color: mixins.$secondary-accent;

    display: grid;
}
</style>
