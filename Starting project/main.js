var app = new Vue({ //creates a new vue instance Vue({options})
    el: '#app', //putting vue instance into the div with id of 'app'
    data: {
        product: 'Socks',
        desc: 'A pair of warm, fuzzy socks',
        image: './assests/vmSocks.jpg',
        google_link: 'https://google.com',
        inventory: 0,
        onSale: false
    }
});