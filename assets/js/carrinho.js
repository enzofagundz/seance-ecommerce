let cadeiraString = sessionStorage.getItem('cadeira');
let cadeiraObj = JSON.parse(cadeiraString);

if (cadeiraObj == null) {
    let purchase = document.querySelector('.purchase');
    let purchaseTotal = document.querySelector('.purchase-total');
    let main = document.querySelector('.main');
   
    purchase.style.display = 'none';
    purchaseTotal.style.display = 'none';

    let div = document.createElement('div');
    let img = document.createElement('img')
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    let text = [];

    div.classList.add('noItens');
    h1.classList.add('noItens-title');
    p.classList.add('noItens-text');
    img.classList.add('noItens-img');
    img.setAttribute('src', '../img/empty-cart.png');

    text[0] = document.createTextNode('Que pena, seu carrinho está vazio');
    text[1] = document.createTextNode('Mas você pode enchê-lo quando quiser');

    h1.appendChild(text[0]);
    p.appendChild(text[1]);
    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(p);
    main.appendChild(div);
}
