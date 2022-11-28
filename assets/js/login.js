const BUTTON = document.querySelector('.input-btn');

let text;
let textArea = document.querySelector('.form-answer-login-text');

let user = {
    mail: '',
    password: ''
};

let userString = localStorage.getItem('user');
let userObject = JSON.parse(userString);

let numbersCaptcha = [];
numbersCaptcha[0] = Math.floor(Math.random() * 20);
numbersCaptcha[1] = Math.floor(Math.random() * 20);

let captchaLabel = document.querySelector('#label-resultado');
let resultadoCaptcha = numbersCaptcha[0] + numbersCaptcha[1];
let captchaText = document.createTextNode(`Quanto é ${numbersCaptcha[0]} + ${numbersCaptcha[1]}?`);

captchaLabel.appendChild(captchaText);

BUTTON.addEventListener('click', function(event){
    event.preventDefault();

    document.querySelector('.form-answer-login-text').textContent = ' ';

    let captchaInput = document.querySelector('#resultado').value;

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
        else if (resultadoCaptcha == '')
        {
            text = document.createTextNode('Insira a resposta para o Captcha')
        }
        else
        {
            text = document.createTextNode('Campo senha vazio');
        }
    }
    else
    {
        if (resultadoCaptcha == captchaInput) {
            if (user.password == userObject.password && userObject.password == user.password)
            {
                window.location = '/index.html';
            }
            else
            {
                text = document.createTextNode('A senha está incorreta');
            }
        }
        else
        {
                text = document.createTextNode('A resposta do captcha está incorreta');
        }
    }
    
    textArea.appendChild(text);
});