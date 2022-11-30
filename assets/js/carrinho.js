for (let i = 0; i < 13; i++) {
   if (sessionStorage.getItem(i.toString()) != null) {
      let produto = sessionStorage.getItem(i.toString());
      let produtoJson = JSON.parse(produto);

      let noItens = document.querySelector('.noItens');
      noItens.style.visibility = 'hidden';

      let purchase = document.querySelectorAll('.visible');
      purchase[0].style.visibility = 'visible';
      purchase[1].style.visibility = 'visible';

      let cartRowItens = ` <div class="purchase-row" id="${produtoJson.id}">
      <div class="row-top-img">
          <img src="${produtoJson.img}" alt="${produtoJson.descricao}" class="item-img">
      </div>
      <div class="row-wrap">
          <div class="row-top row">
              <div class="row-top-title">
                  <h3 class="item-name">
                     ${produtoJson.nome}
                  </h3>
              </div>
              <div class="row-top-remove">
                  <h4 class="item-remove">
                      X
                  </h4>
              </div>
          </div>
          <div class="row-down row">
              <div class="row-down-price">
                  <h3 class="item-price">
                     ${'R$' + produtoJson.preco}
                  </h3>
              </div>
              <div class="row-down-amount">
                  <input type="button" value="-" class="item-sign minun-sign">
                  <input type="number" value="1" min="1" class="item-amount">
                  <input type="button" value="+" class="item-sign plus-sign">
              </div>
          </div>
      </div>
  </div>`;

      let cartRow = document.querySelector('.purchase');
      cartRow.innerHTML += cartRowItens;

      updateCartTotal();
   }
}

function updateCartTotal() {
   let h3 = document.querySelector('.total-price');

   let allPrices = document.querySelectorAll('.item-price');
   let total = 0;

   for (let i = 0; i < allPrices.length; i++) {
      let price = allPrices[i].innerHTML;
      let priceNumber = parseFloat(price.replace('R$', ''));
      total += priceNumber;
   }

   h3.innerHTML = 'R$' + total.toFixed(2);
}

let removeBtn = document.querySelectorAll('.item-remove');

removeBtn.forEach((btn) => {
   btn.addEventListener('click', () => {
      let item = btn.parentNode.parentNode.parentNode.parentNode;
      removeItem(item.id);
   });
});

function removeItem (id) {
   sessionStorage.removeItem(id);
   location.reload();
}

let plusBtn = document.querySelectorAll('.plus-sign');
let minunBtn = document.querySelectorAll('.minun-sign');

plusBtn.forEach((btn) => {
   btn.addEventListener('click', () => {
      let item = btn.parentNode.parentNode.parentNode.parentNode;
      let amount = item.querySelector('.item-amount');
      
      amount.value++;

      let price = item.querySelector('.item-price');
      let priceNumber = parseFloat(price.innerHTML.replace('R$', ''));
      let originalPrice = sessionStorage.getItem(item.id);
      let originalPriceJson = JSON.parse(originalPrice);

      let newPrice = priceNumber + parseFloat(originalPriceJson.preco);

      price.innerHTML = 'R$' + newPrice.toFixed(2);
     
      updateCartTotal();
   });
});

minunBtn.forEach((btn) => {
   btn.addEventListener('click', () => {
      let item = btn.parentNode.parentNode.parentNode.parentNode;
      let amount = item.querySelector('.item-amount');
      let oldPrice = item.querySelector('.item-price');
      let oldPriceNumber = parseFloat(oldPrice.innerHTML.replace('R$', ''));
      let originalPrice = sessionStorage.getItem(item.id);
      let originalPriceJson = JSON.parse(originalPrice);

      if(amount.value > 1) {
         amount.value--;
         oldPrice.innerHTML = 'R$' + (oldPriceNumber - originalPriceJson.preco).toFixed(2);
      } else {
         amount.value = 1;
         oldPrice.innerHTML = 'R$' + originalPriceJson.preco;
      }

      updateCartTotal();
   });
});