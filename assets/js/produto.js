let cadeiras = [
    {nome: "Sofá branco D'Rossi", 
    img: '../img/Sem-Título-1_01.jpg',  
    preco: '385.90', descricao: 'Sofá branco de dois lugares com dois travesseiros e pés metálicos'},
    
    {nome: 'Cadeira branca Combinare', 
    img: '../img/Sem-Título-1_02.jpg',
    preco: '99.90', descricao: 'Cadeira branca estofada acompanhada de uma almofada com pernas de madeira clara'},

    {nome: 'Cadeira branca Luxo Sued',
    img: '../img/Sem-Título-1_03.jpg',
    preco: '59.90', descricao: 'Cadeira branca estofada com pernas de madeira preta e detalhes circulares'},

    {nome: 'Cadeira cinza AM Decor',
    img: '../img/Sem-Título-1_04.jpg',
    preco: '49.90', descricao: 'Cadeira de escritório com design moderno e confortável.'},
    
    {nome: 'Banco preto Combinare',
    img: '../img/Sem-Título-1_05.jpg',
    preco: '19.90', descricao: 'Banco de madeira preta tamanho baixo.'},

    {nome: 'Cadeira branca Séance',
    img: '../img/Sem-Título-1_06.jpg',
    preco: '59.90', descricao: 'Cadeira de branca na cor marrom com braços altos e pés de madeira com detalhes circulares'},

    {nome: 'Cadeira branca Herman Miller',
    img: '../img/Sem-Título-1_07.jpg',
    preco: '229.90', descricao: 'Cadeira de escritório branca com rodinhas e pés metálicos.'},

    {nome: 'Cadeira cinza Gran Belo',
    img: '../img/Sem-Título-1_08.jpg',
    preco: '55.90', descricao: 'Cadeira de escritório com design moderno e confortável.'},

    {nome: 'Cadeira Herman Miller',
    img: '../img/Sem-Título-1_09.jpg',
    preco: '24.90', descricao: 'Cadeira de escritório branca com rodinhas e pés metálicos.'},

    {nome: 'Cadeira Herman Miller',
    img: '../img/Sem-Título-1_10.jpg',
    preco: '24.90', descricao: 'Cadeira de escritório branca com rodinhas e pés metálicos.'},

    {nome: 'Cadeira Herman Miller',
    img: '../img/Sem-Título-1_11.jpg',
    preco: '24.90', descricao: 'Cadeira de escritório branca com rodinhas e pés metálicos.'},

    {nome: 'Cadeira Herman Miller',
    img: '../img/Sem-Título-1_12.jpg',
    preco: '24.90', descricao: 'Cadeira de escritório branca com rodinhas e pés metálicos.'},

    {nome: 'Cadeira Herman Miller',
    img: '../img/Sem-Título-1_13.jpg',
    preco: '24.90', descricao: 'Cadeira de escritório branca com rodinhas e pés metálicos.'},

    {nome: 'Cadeira Herman Miller',
    img: '../img/Sem-Título-1_14.jpg',
    preco: '24.90', descricao: 'Cadeira de escritório branca com rodinhas e pés metálicos.'}
];

function produto (id) {
        Number(id);
        console.log(id);

        sessionStorage.setItem('cadeira', JSON.stringify(cadeiras[id]));
        //sessionStorage.setItem('recommended-products', id);
        window.location = '/assets/pages/produto.html';
}