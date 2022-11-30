for (let i = 0; i < 13; i++) {
     if (sessionStorage.getItem(i.toString()) != null) {
        let produto = sessionStorage.getItem(i.toString());
        let produtoJson = JSON.parse(produto);

        let noItens = document.querySelector('.noItens');
        noItens.style.visibility = 'hidden';

        let purchase = document.querySelectorAll('.visible');
        purchase[0].style.visibility = 'visible';
        purchase[1].style.visibility = 'visible';

     }
}