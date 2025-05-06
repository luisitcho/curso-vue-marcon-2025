const { createApp, ref } = Vue

createApp({
  setup() {
    return {
      image: ref('./assets/img/t-shirt-blue.png'),
      img_product: 'Camiseta Azul',
      product_title: 'T-Shirt',
      in_stock: ref(0),
    }
  }
}).mount('#app')