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
        <div class="section">
            <div class="consumer container">
                <hr />
                <router-link :to="`/public-offer-agreement`">
                    <h4>Договір публічної оферти | Extaz Sushi</h4>
                </router-link>
                <hr />
                <router-link :to="`refund-policy`">
                    <h4>Умови повернення продукції | Extaz Sushi</h4>
                </router-link>
                <hr />
            </div>
        </div>
        <div class="payment-section section">
            <div class="payment-container container">
                <img
                    src="/src/assets/images/visa-mastercard.png"
                    alt="Visa and mastercard logos"
                    class="payment-image" />
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

<style lang="scss" scoped>
.consumer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    hr {
        width: 100%;
        border: 0;
        border-top: 1px solid #eeeeee;
    }
    h4 {
        font-size: 1.125rem;
        line-height: 1.75;
    }
}
.payment-section {
    padding: 5rem 0 0;
}
.payment-image {
    align-self: center;
    max-width: 420px;
}
.payment-container {
    display: flex;
    justify-content: center;
}
</style>
