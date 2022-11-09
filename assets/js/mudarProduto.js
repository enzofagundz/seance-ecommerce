let cadeiraString = sessionStorage.getItem('cadeira');
let cadeira = JSON.parse(cadeiraString);

//let divProdutos = document.querySelector('.recommended-products');
let imgProdutos = document.querySelector('.product-image-container');
let nomeProdutos = document.querySelector('.product-name');
let precoProdutos = document.querySelector('.product-price');
let descricaoProdutos = document.querySelector('.product-description');
let tituloProduto = document.querySelector('.navbar-title');

let title = document.createTextNode(cadeira.nome);
let text = document.createTextNode(cadeira.nome);
let price = document.createTextNode(cadeira.preco);  
let description = document.createTextNode(cadeira.descricao);

let img = document.createElement('img'); 
img.classList.add('product-image');       
img.setAttribute('src', cadeira.img);
img.setAttribute('alt', cadeira.descricao)

nomeProdutos.appendChild(title);
imgProdutos.appendChild(img);
precoProdutos.appendChild(price);
descricaoProdutos.appendChild(description);
tituloProduto.appendChild(text);
document.title = cadeira.nome;