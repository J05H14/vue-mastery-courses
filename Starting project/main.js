var app = new Vue({ //creates a new vue instance Vue({options})
    el: '#app', //putting vue instance into the div with id of 'app'
    data: {
        product: 'Socks',
        desc: 'A pair of warm, fuzzy socks',
        image: './assests/vmSocks.jpg',
        google_link: 'https://google.com',
        inventory: 0,
        onSale: false,
        details: ['80% cotton', '20% polyester', 'gender neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: './assests/vmSocks.jpg'
            },
            {
                variantID: 2235,
                variantColor: 'blue',
                variantImage: './assests/vmSocks-blue.jpg'
            }
        ],
        sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
        cart: 0
    },
    methods:{
        addToCart: function(){
            this.cart += 1;
        },
        removeFromCart: function(){
            this.cart -=1;
        },
        updateProduct: function(variantImage){
            this.image = variantImage;
        }
    }
});