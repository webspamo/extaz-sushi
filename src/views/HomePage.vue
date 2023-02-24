<template>
    <main>
        <div class="section">
            <div class="headings container">
                <h1 class="hero-title">Топові позиції</h1>
                <p class="hero-subtitle">Для максимальної насолоди</p>
            </div>
        </div>

        <div class="section">
            <div class="menu-items container">
                <MenuItem
                    v-for="item in topMenuItems"
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
        </div>

        <div class="section">
            <div class="item-categories container">
                <ItemsCategory
                    v-for="category in itemCategories"
                    :key="category.id"
                    :id="category.id"
                    :title="category.title"
                    :image="category.image"
                    :containedItemsId="category.containedItemsId" />
            </div>
        </div>

        <div class="section">
            <InfoContent />
        </div>
        <div class="section">
            <ContactsContent />
        </div>
    </main>
</template>

<script>
import {mapState} from "pinia";
import {useAssortmentStore} from "@/stores/assortment";

import MenuItem from "../components/MenuItem.vue";
import ItemsCategory from "../components/ItemsCategory.vue";
import InfoContent from "../components/InfoContent.vue";
import ContactsContent from "../components/ContactsContent.vue";

export default {
    name: "HomePage",
    components: {
        MenuItem,
        ItemsCategory,
        InfoContent,
        ContactsContent,
    },
    data() {
        return {
            topMenuItemIds: [
                "euphoria-roll",
                "philadelphia-mango-roll",
                "luxury-roll",
            ],
        };
    },

    computed: {
        ...mapState(useAssortmentStore, ["getMenuItemById", "itemCategories"]),
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

.item-categories {
    display: grid;
    justify-content: center;
    grid-template-columns: 400px 400px;
    grid-template-rows: 350px 250px 150px;
    gap: 2.5rem 3.75rem;
}
</style>
