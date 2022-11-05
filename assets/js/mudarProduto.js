let cadeiraString = sessionStorage.getItem('cadeira');
let cadeira = JSON.parse(cadeiraString);

let divProdutos = document.querySelector('.recommended-products');
let imgProdutos = document.querySelector('.prod-img');
let nomeProdutos = document.querySelector('.recommended-products-title');
let precoProdutos = document.querySelector('.recommended-products-price');
let descricaoProdutos = document.querySelector('.recommended-products-description');

let title = document.createTextNode(cadeira.nome); 
let price = document.createTextNode(cadeira.preco);  
let description = document.createTextNode(cadeira.descricao);  

let img = document.createElement('img'); 
img.classList.add('recommended-products-image');       
img.setAttribute('src', cadeira.img);


nomeProdutos.appendChild(title);
imgProdutos.appendChild(img);
precoProdutos.appendChild(price);
descricaoProdutos.appendChild(description);