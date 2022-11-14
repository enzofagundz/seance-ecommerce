const BUTTON = document.querySelector('.input-btn');

let userString = localStorage.getItem('user');
let userObject = JSON.parse(userString);
let user = {
    mail: '',
    password: '',
    newPassword: ''
};

let text;
let textArea = document.querySelector('.form-answer-text');

BUTTON.addEventListener('click', function(event){
    event.preventDefault();

    document.querySelector('.form-answer-text').textContent = ' ';

    user.mail = document.querySelector('#email').value;
    user.password = document.querySelector('#password').value;
    user.newPassword = document.querySelector('#newPassword').value;

    if (user.mail == '' || user.password == '' || user.newPassword == '')
    {
        if (user.mail == '' && user.password == '' && user.newPassword == '')
        {
            text = document.createTextNode('Campos vazios, insira as informações');
        }
        else if (user.mail== '')
        {
            text = document.createTextNode('Campos e-mail vazio');
        }
        else if (user.password == '')
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
        if (userObject.mail == user.mail)
        {
            if (user.password == userObject.password)
            {
            text = document.createTextNode('Esta é sua senha atual, insira uma nova senha');
            }
            else
            {
                if (user.password == user.newPassword)
                {
                    userObject.password = user.newPassword;
                    localStorage.setItem('user', JSON.stringify(user));
                    grecaptcha.execute();
                    window.location = '/index.html';
                }
                else
                {
                    text = document.createTextNode('As senhas não coincidem');
                }
            }
        }
        else
        {
            text = document.createTextNode('O e-mail não corresponde ao cadastrado');
        }
    }
    
    textArea.appendChild(text);
});