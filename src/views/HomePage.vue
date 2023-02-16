<template>
    <main>
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
import MenuItem from "../components/MenuItem.vue";
import ItemsCategory from "../components/ItemsCategory.vue";
import InfoContent from "../components/InfoContent.vue";
import ContactsContent from "../components/ContactsContent.vue";

import {mapState} from "pinia";
import {useAssortmentStore} from "@/stores/assortment";

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
.menu-items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.5rem;

    .menu-item {
        width: 100%;
    }
}

.item-categories {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 350px 250px 150px;
    gap: 40px 60px;
}
</style>
