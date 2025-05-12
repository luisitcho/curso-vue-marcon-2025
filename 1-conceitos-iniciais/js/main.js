const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        const cart = ref(0);
        function addToCart() {
            cart.value += 1;
        }

        const image = ref("./assets/img/t-shirt-blue.png");
        function changeImage(variant) {
            image.value = variant;
        }

        const product_title = "T-Shirt";
        const brand = "Vue Mastery";
        const title = computed(() => {
            return `${product_title} ${brand}`;
        });

        const in_stock = 100;
        const inStock = computed(() => {
            const rules = [
                { condition: (qty) => qty > 20, message: "In Stock" },
                { condition: (qty) => qty > 1, message: "Almost out" },
                { condition: () => true, message: "Out of Stock" },
            ];

            return rules.find((rule) => rule.condition(in_stock.value)).message;
        });

        const isOutOfStock = computed(() => in_stock < 1);

        return {
            image,
            img_product: "Camiseta Azul",
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
            title,
            inStock,
            isOutOfStock
        };
    },
}).mount("#app");
