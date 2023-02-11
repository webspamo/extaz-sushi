import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        cartItems: [
            {
                id: "euphoria",
                quantity: 10
            }
        ]
    }),
});
