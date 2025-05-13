export default {
    name: "CartDisplay",
    props: ['cart'],
    setup(){

    },
    template: `
        <div class="cart">Cart: {{ cart }}</div>
    `,
}