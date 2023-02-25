<template>
    <main>
        <div class="section">
            <div class="policy container">
                <p class="policy-subtitle">EXTAZ SUSHI</p>
                <h1 class="policy-title">Умови повернення продукції</h1>
                <div class="policy-text">
                    <p>
                        Відповідно до законодавства України повернення
                        продовольчої продукції належної якості не допускається,
                        повернення грошових коштів за таку продукцію не
                        проводиться.
                    </p>
                    <br />
                    <p>
                        Повернення продукції неналежної якості. У разі якщо
                        клієнт виявить, що йому передана продукція неналежної
                        якості, він має право до закінчення терміну придатності
                        повернути продукцію неналежної якості виконавцю і
                        вимагати повернення сплаченої грошової суми, або
                        вимагати заміни продукції неналежної якості.
                    </p>
                    <br />
                    <p>
                        При цьому вартість продукції повертається клієнту
                        протягом 3-х днів з моменту отримання виконавцем заяви
                        клієнта.
                    </p>
                    <br />
                    <p>
                        Порядок дій при пересорті У разі виявлення в замовленні
                        продукції, що не відповідає замовленої, клієнт має право
                        прийняти дану продукцію або відмовитися від неї і
                        вимагати заміни на продукцію, передбачену замовленням,
                        або повернення грошових коштів за фактично не одержану
                        продукцію.
                    </p>
                    <br />
                    <p>
                        Заміна продукції, що не відповідає замовленню за
                        асортиментом, здійснюється шляхом оформлення нового
                        замовлення.
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "RefundPolicyPage",
    components: {},
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
main {
    background-color: white;
}
.policy {
    color: black;
    font-weight: 300;
    font-size: 1.25rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-title {
        margin-bottom: 3rem;
        font-size: 2.25rem;
        color: black;
    }

    &-subtitle {
        margin-bottom: 0.5rem;
        font-weight: 600;
        letter-spacing: 0.15625em;
    }

    &-text {
        width: 760px;
    }
}
</style>
