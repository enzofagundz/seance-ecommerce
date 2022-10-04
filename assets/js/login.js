const BUTTON = document.querySelector('.input-btn');

let text;
let textArea = document.querySelector('.form-answer-login-text');

let user = {
    mail: '',
    password: ''
};

let userString = localStorage.getItem('user');
let userObject = JSON.parse(userString);

BUTTON.addEventListener('click', function(event){
    event.preventDefault();

    document.querySelector('.form-answer-login-text').textContent = ' ';

    user.mail = document.querySelector('#email').value;
    user.password = document.querySelector('#password').value;

    if (user.mail == '' || user.password == '') {
        if (user.mail == '' && user.password == '')
        {
            text = document.createTextNode('Campos vazios, insira as informações');
        }
        else if (user.mail== '')
        {
            text = document.createTextNode('Campos e-mail vazio');
        }
        else
        {
            text = document.createTextNode('Campo senha vazio');
        }
    }
    else
    {
        if (user.password == userObject.password && userObject.password == user.password)
        {
            window.location = 'home.html';
        }
        else
        {
            text = document.createTextNode('A senha está incorreta');
        }
    }
    
    textArea.appendChild(text);
});