export default {
    name: "ProductDisplay",
    setup() {
        const { ref, computed } = Vue;

        const image = ref("./assets/img/t-shirt-blue.png");
        function changeImage(variant) {
            image.value = variant;
        }

        const product_title = "T-Shirt";
        const brand = "Vue Mastery";
        const title = computed(() => `${product_title} ${brand}`);

        const in_stock = ref(100);
        const inStock = computed(() => {
            const rules = [
                { condition: (qty) => qty > 20, message: "In Stock" },
                { condition: (qty) => qty > 1, message: "Almost out" },
                { condition: () => true, message: "Out of Stock" },
            ];
            return rules.find((rule) => rule.condition(in_stock.value)).message;
        });

        const isOutOfStock = computed(() => in_stock.value < 1);

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
            changeImage,
            title,
            inStock,
            isOutOfStock,
        };
    },
    template: `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" :alt="img_product" />
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p>{{ inStock }}</p>
                    <ul>
                        <li v-for="(detail, index) in details" :key="index">
                            {{ detail }} {{ index }}
                        </li>
                    </ul>
                    <div v-for="variant in variants" :key="variant.id" @mouseover="changeImage(variant.image)"
                        class="color-circle" :style="{ backgroundColor: variant.color }">
                    </div>
                    <button 
                        :class="['button', 'p-2', { disabledButton: isOutOfStock }]" 
                        @click="$emit('add-to-cart')"
                        :disabled="isOutOfStock">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `,
};
