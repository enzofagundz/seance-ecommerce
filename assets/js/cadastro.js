let user = {
    mail: '',
    password: '',
    confirmPassword: ''
}

const BODY = document.querySelector('body');
const BUTTON = document.querySelector('#submit');
let text;
let textArea = document.querySelector('.form-answer-text');

BODY.onload = () => {
    let userString = localStorage.getItem('user');

    if (userString != null) {
        window.location = '/assets/pages/login.html';
    }
}

BUTTON.addEventListener('click', function(event){
    event.preventDefault();

    document.querySelector('.form-answer-text').textContent = ' ';

    user.mail = document.querySelector('#email').value;
    user.password = document.querySelector('#password').value;
    user.confirmPassword = document.querySelector('#confirm-password').value;

    if (user.mail == '' || user.password == '' || user.confirmPassword == '') {
        if (user.mail == '' && user.confirmPassword == '' && user.confirmPassword == '')
        {
            text = document.createTextNode('Campos vazios, insira as informações');
        }
        else if (user.mail== '')
        {
            text = document.createTextNode('Campos e-mail vazio');
        }
        else if(user.password == '')
        {
            text = document.createTextNode('Campo senha vazio');
        }
        else
        {
            text = document.createTextNode('Campo para confirmar senha vazio');
        }
    }
    else
    {
        if (user.password == user.confirmPassword && user.confirmPassword == user.password)
        {
            localStorage.setItem('user', JSON.stringify(user));
            let userString = localStorage.getItem('user');

            window.location = '/index.html';
        }
        else
        {
            text = document.createTextNode('As senhas não coincidem');
        }
    }
    
    textArea.appendChild(text);
});


