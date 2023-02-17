<template>
    <main>
        <div class="section">
            <div class="headings container">
                <h1 class="hero-title"></h1>
            </div>
        </div>

        <div class="section">
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

export default {
    name: "ClassicPage",
    components: {
        MenuItem,
    },
    data() {
        return {
            categoryId: "classic",
        };
    },
    computed: {
        ...mapState(useAssortmentStore, ["getMenuItemsByCategory"]),

        menuItems() {
            const a = this.getMenuItemsByCategory("classic");
            console.log(a);
            return a;
        },
    },
};
</script>
<style lang="scss" scoped>
.headings {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
