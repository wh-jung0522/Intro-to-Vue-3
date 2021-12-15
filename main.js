const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S','M','L'],
            variants:[
                {id:1234, color:'green'},
                {id:5678, color:'blue'}
            ]
        }
    }
})
