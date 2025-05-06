const { createApp, ref } = Vue;

createApp({
    setup() {
        return {
            image: ref("./assets/img/t-shirt-blue.png"),
            img_product: "Camiseta Azul",
            product_title: "T-Shirt",
            in_stock: ref(0),
            details: ["50% Cotton", "30% Polyester", "20% Wool"],
            variants: [
                {
                    id: 0,
                    color: "blue",
                },
                {
                    id: 1,
                    color: "green",
                },
            ],
        };
    },
}).mount("#app");
