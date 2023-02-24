<template>
    <main>
        <div class="section">
            <div class="headings container">
                <h1 class="main-title">Доставка та Оплата</h1>
                <p class="main-subtitle">
                    Замовляйте доставку свіжих та смачних ролів онлайн
                </p>
            </div>
        </div>

        <div class="section">
            <div class="container">
                <InfoContent />
            </div>
        </div>
    </main>
</template>

<script>
import InfoContent from "../components/InfoContent.vue";

export default {
    name: "DeliveryPaymentPage",
    components: {
        InfoContent,
    },
    data() {
        return {};
    },
};
</script>
<style lang="scss" scoped></style>
