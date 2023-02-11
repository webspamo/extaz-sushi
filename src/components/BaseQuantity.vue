<template>
    <div class="quantity">
        <button type="button"
            :disabled="modelValue === 1"
            @click="$emit('less')"
            class="quantity-button">
            <BaseIcon name="minus-light"></BaseIcon>
        </button>

        <input type="text"
            required
            pattern="\d+"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="quantity-input" />

        <button type="button"
            @click="$emit('more')"
            class="quantity-button">
            <BaseIcon name="plus-light"></BaseIcon>
        </button>
    </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";

export default {
    name: "BaseQuantity",
    components: { BaseIcon },
    emits: ['less', 'more', 'update:modelValue'],
    props: {
        modelValue: Number,
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss">
@use "@/assets/styles/_mixins";

.quantity {
    flex: 1 1 0;
    background-color: #fff;

    height: 45px;
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    &-button {
        background-color: transparent;

        &:hover {}

        cursor: pointer;
    }

    &-input {
        width: 2rem;
        outline-style: none;
        outline-color: transparent;
        border: none;
        text-align: center;
    }
}
</style>