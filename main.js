const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            discript: 'It is suitable to wear in the field.',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            inventory: 20,
            details: ['50% cotton', '30% wool', '20% ployester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2235, color: 'bule', image: './assets/images/socks_blue.jpg'}
            ],
            sizes: ['S', 'M', 'L'],
            onSale: true,
            cmu_link: 'https://go.camt.cmu.ac.th/',
            cart: 0,
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
            this.inventory -= 1
            console.log(this.inventory)
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        changeStute(){
            this.inventory = this.inventory - this.cart
            this.inStock = false
        }
    },
})