<template>
    <main>
        <div class="section">
            <div class="headings container">
                <h1 class="main-title">{{ category.title }}</h1>
                <p class="main-subtitle">
                    НАБОРИ НА ДВОХ ТА НА ВЕЛИКУ КОМПАНІЮ
                </p>
            </div>
        </div>

        <div class="section">
            <div class="menu-items container">
                <MenuItem
                    v-for="item in menuItems"
                    :key="item.id"
                    :name="item.name"
                    :image="item.defaultImage"
                    :description="item.description"
                    :weight="item.weight"
                    :weight-name="item.weightName"
                    :price="item.price"
                    :currency="item.currency"
                    :addons="item.addons" />
            </div>
            <!-- <div class="item-categories container">
                <ItemsCategory
                    v-for="category in itemCategories"
                    :key="category.id"
                    :id="category.id"
                    :title="category.title"
                    :image="category.image"
                    :containedItemsId="category.containedItemsId" />
            </div> -->
        </div>
    </main>
</template>

<script>
import {mapState} from "pinia";
import {useAssortmentStore} from "@/stores/assortment";

import MenuItem from "../components/MenuItem.vue";

export default {
    name: "SetsPage",
    components: {
        MenuItem,
    },
    data() {
        return {
            category: {},
        };
    },
    computed: {
        ...mapState(useAssortmentStore, [
            "getMenuItemsByCategory",
            "getCategoryById",
        ]),

        menuItems() {
            return this.getMenuItemsByCategory(this.category.id);
        },
    },
    created() {
        this.category = this.getCategoryById("sets");
    },
};
</script>
<style lang="scss" scoped></style>
