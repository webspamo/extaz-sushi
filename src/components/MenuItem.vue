<template>
    <div class="menu-item">
        <div class="item-image">
            <img src="@/assets/images/sushi-1.jpg"
                alt="" />
        </div>
        <div class="item-details">
            <div class="item-name">ЕЙФОРІЯ РОЛ</div>
            <div class="item-description">
                Обпалений, карамелізований унагі соусом лосось, креветка, ікра
                тобіко, авокадо.
            </div>
            <div class="item-weight">330g</div>
            <div class="item-price">440грн</div>
        </div>
        <div class="item-footer">
            <div class="item-options">
                <label>
                    Select
                    <select value="1">
                        <option value="1">Losos</option>
                    </select>
                </label>
            </div>
            <div class="item-controls">
                <BaseQuantity v-model="quantity"
                    @less="quantity--"
                    @more="quantity++" />

                <button class="add-to-cart">
                    <BaseIcon name="shopping-basket"
                        class="shopping-basket-icon"></BaseIcon>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import BaseQuantity from "./BaseQuantity.vue";

export default {
    name: "MenuItem",
    components: {
        BaseIcon,
        BaseQuantity
    },
    data() {
        return {
            quantity: 1
        };
    },
    methods: {
    },
};
</script>

<style lang="scss">
@use "@/assets/styles/_mixins";

.menu-item {
    border-radius: 30px;
    background-color: #01161a;
    overflow: hidden;

    .item-image {
        img {
            max-width: 100%;
        }
    }

    .item-details {
        padding: 1.5em;

        .item-name {
            font-size: 1.1rem;
            font-weight: 700;
            text-align: center;
            text-transform: uppercase;
            color: mixins.$main-accent;
        }

        .item-description,
        .item-weight {
            margin-top: 1rem;
            font-size: 0.8rem;
            text-align: center;
        }

        .item-price {
            margin-top: 1rem;
            font-size: 1.1rem;
            font-weight: 500;
            text-align: center;
            color: mixins.$main-accent;
        }
    }

    .item-footer {
        padding: 1.5rem;
        padding-top: 0;

        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .item-options {
            label {
                display: flex;
                flex-direction: column;
                font-size: 0.95rem;
                gap: 0.2rem;
            }
        }

        .item-controls {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.625rem;

            &>* {
                flex: 1 1 0;
            }

            .add-to-cart {
                background-color: mixins.$main-accent;
                transition: transform 0.2s;

                display: flex;
                align-items: center;
                justify-content: center;

                height: 45px;
                border-radius: 50px;

                &:hover {
                    transform: scale(0.9);
                }

                .shopping-basket-icon {
                    width: 45px;
                    color: white;
                }
            }
        }
    }
}
</style>
