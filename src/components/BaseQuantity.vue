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
    background-color: #fff;

    height: 45px;
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    &-button {
        color: black;
        background-color: transparent;

        position: relative;

        &:first-child {
            padding: 0 0.3125rem;

            &::after {
                content: "";
                position: absolute;

                top: 50%;
                right: 0;

                transform: translateY(-50%);

                display: block;
                height: 100%;
                width: 1px;
                background-color: lightgray;
            }
        }

        &:last-child {
            padding: 0 0.3125rem;

            &::before {
                content: "";
                position: absolute;

                top: 50%;
                left: 0;

                transform: translateY(-50%);

                display: block;
                height: 100%;
                width: 1px;
                background-color: lightgray;
            }
        }

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