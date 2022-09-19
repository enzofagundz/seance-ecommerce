let user = {
    mail: '',
    password: '',
    confirmPassword: ''
}

const BUTTON = document.querySelector('#submit');
var paragraph = document.createElement('p');
var text = document.createTextNode("As senhas não coincidem");
var textArea = document.querySelector('.form-answer');

paragraph.appendChild(text);


BUTTON.addEventListener('click', function(event){
    event.preventDefault();

    user.mail = document.querySelector('#email').value;
    user.password = document.querySelector('#password').value;
    user.confirmPassword = document.querySelector('#confirm-password').value;

    if (user.mail == '' || user.password == '' || user.confirmPassword == '') {
        if (user.mail == '' && user.confirmPassword == '' && user.confirmPassword == '')
        {
            text= document.createTextNode('Campos vazios, insira as informações');
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
        
        paragraph.appendChild(text);
        textArea.appendChild(paragraph);
    }
    else
    {
        if (user.password == user.confirmPassword && user.confirmPassword == user.password)
        {
            localStorage.setItem('user', JSON.stringify(user));
            let userString = localStorage.getItem('user');

            console.log(userString);
            window.location = '../assets/pages/home.html';
        }
        else
        {
            textArea.appendChild(paragraph);
            //alert("Usuário ou senha incorreto");
        }
    }   
});

