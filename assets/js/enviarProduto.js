let cartButton = document.querySelector('.product-cart');
let directButton = document.querySelector('.product-buy');
let sessionChair = sessionStorage.getItem('cadeira');

directButton.addEventListener('click', function (event) {
    event.preventDefault();

    window.location = '/assets/pages/carrinho.html'
});