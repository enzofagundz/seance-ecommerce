const BODY = document.querySelector('body');
let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".close-button");
let closeText = document.querySelector(".close-text");
let flag = false;
let userString = localStorage.getItem('user');

if (userString == null) {
    setTimeout(() => toggleModal(), 180000);
}
else
{
    flag = true;
}


function toggleModal() {
    modal.classList.toggle("show-modal");
}

closeButton.addEventListener("click", toggleModal);
closeText.addEventListener("click", toggleModal);