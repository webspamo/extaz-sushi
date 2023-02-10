<template>
    <header class="header">
        <nav class="header-navigation">
            <ul class="navigation-list">
                <li class="navigation-item">
                    <a
                        href="#"
                        class="navigation-link">
                        Доставка та оплата
                    </a>
                </li>
                <li class="navigation-item">
                    <a
                        href="#"
                        class="navigation-link">
                        Меню
                        <svg-icon
                            type="mdi"
                            :path="path"
                            class="table-icon"
                            @click="openModal('edit', book)"></svg-icon>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import {mdiChevronDown} from "@mdi/js";

export default {
    name: "TheHeader",
    components: {
        SvgIcon,
    },
    data() {
        return {
            path: mdiChevronDown,
        };
    },
};
</script>
<style lang="scss" scoped>
.header {
    padding: 0 20px;
}

.header-navigation {
    .navigation-list {
        display: flex;
        align-items: center;
        justify-content: center;
        .navigation-item {
            list-style-type: none;
        }
        .navigation-link {
            text-decoration: none;
            text-transform: uppercase;
        }
    }
}
</style>
