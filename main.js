const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            // discript: 'It is suitable to wear in the field.',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% ployester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2235, color: 'bule', image: './assets/images/socks_bule.jpg'}
            ],
            cart: 0,
            methods: {
                addToCart() {
                    this.cart += 1
                },
                updateImage(variantImage){
                    this.image = variantImage
                }
            },

            sizes: ['S', 'M', 'L'],
            onSale: true,
            // cmu_link: 'https://www.cmu.ac.th/'
        }
    }
})