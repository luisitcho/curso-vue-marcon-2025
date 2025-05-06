const { createApp, ref } = Vue

createApp({
  setup() {
    const message = ref('Hello World!')
    return {
      message,
      image: ref('./assets/img/t-shirt-blue.png'),
      img_product: 'Camiseta Azul',
    }
  }
}).mount('#app')