<template>
    <router-link
        :to="`/${id}`"
        class="items-category"
        :class="id"
        :style="`background-image: url(${image});`">
        <h3 class="category-title">
            {{ title }}
        </h3>
    </router-link>
</template>

<script>
//grid-area: ${id};

export default {
    name: "MenuItem",
    components: {},
    props: {
        id: String,
        title: String,
        image: String,
        containedItemsId: Array,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss">
@use "@/assets/styles/_mixins";

.items-category {
    background-size: cover;
    border-radius: 50px;
    box-shadow: 0px 4px 8px 4px rgb(0 213 255 / 30%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    .category-title {
        font-size: 2.625rem;
        line-height: 1.55;
        text-transform: uppercase;
    }
}

// .classical {
//     grid-area: classical;
// }
// .specialty {
//     grid-area: specialty;
// }
// .sets {
//     grid-area: sets;
// }
// .baked {
//     grid-area: baked;
// }
// .sushi {
//     grid-area: sushi;
// }
// .adds {
//     grid-area: adds;
// }
</style>
