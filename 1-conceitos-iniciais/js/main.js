const { createApp, ref } = Vue;

createApp({
    setup() {
        const cart = ref(0);
        function addToCart() {
            this.cart += 1;
        }

        const image = ref("./assets/img/t-shirt-blue.png");
        function changeImage(variant) {
            image.value = variant;
        }

        return {
            image,
            img_product: "Camiseta Azul",
            product_title: "T-Shirt",
            in_stock: ref(0),
            details: ["50% Cotton", "30% Polyester", "20% Wool"],
            variants: [
                {
                    id: 0,
                    color: "blue",
                    image: "./assets/img/t-shirt-blue.png",
                },
                {
                    id: 1,
                    color: "green",
                    image: "./assets/img/t-shirt-green.png",
                },
            ],
            cart,
            addToCart,
            changeImage,
        };
    },
}).mount("#app");
