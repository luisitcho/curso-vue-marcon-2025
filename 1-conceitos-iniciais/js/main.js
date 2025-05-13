import CartDisplay from "../Components/Cart.js";
import ProductDisplay from "../Components/Product.js";
const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const cart = ref(0);
        function addToCart() {
            cart.value += 1;
        }

        return {
            cart,
            addToCart,
        };
    },
    components: {
        ProductDisplay,
        CartDisplay,
    },
});

app.mount("#app");
