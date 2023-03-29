<template>
    <div class="modal-wrapper">
        <div class="modal-content cart">
            <div class="cart-heading">Ваше замовлення:</div>
            <div class="cart-items">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam cumque autem deleniti quae vero animi eius ab atque,
                    nam tenetur id ullam eligendi, iusto labore ducimus laborum
                    illum possimus itaque.
                </p>
                <CartItem />
            </div>
            <div class="cart-total">Сума:</div>
            <BaseQuantity
                v-model="quantity"
                @less="quantity--"
                @more="quantity++"
                class="cart-quantity" />
        </div>
    </div>
</template>

<script>
import {mapState} from "pinia";
import {useSiteStore} from "@/stores/site";

import CartItem from "./CartItem.vue";
import BaseQuantity from "./BaseQuantity.vue";

export default {
    name: "ShoppingCartModal",
    components: {CartItem, BaseQuantity},
    data() {
        return {
            quantity: 1,
        };
    },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/_mixins";

.modal-wrapper {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //overflow: auto;
    background-color: rgba(mixins.$main-bg-color, 0.8);
}

.modal-content {
    // position: relative;
    margin: 65px auto;
    padding: 2.5rem;
    width: 100%;
    max-width: 560px;
    min-height: 300px;
    background-color: rgba(255, 255, 255, 1);
    padding: 40px;
    box-sizing: border-box;
    overflow: auto;
}

.cart {
    color: black;
    &-heading {
        margin-bottom: 1.875rem;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.35;
        color: mixins.$main-accent;
    }
    &-items {
        margin-bottom: 1.875rem;
        padding: 1rem 0;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
    &-total {
        text-align: right;
        font-weight: 600;
        letter-spacing: 0.1em;
    }
    &-quantity {
        width: 15 0px;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
}
</style>
