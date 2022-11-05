let cadeiras = [
    {nome: "Cadeira branca D'Rossi", 
    img: 'https://i.postimg.cc/dhHVZxyt/Sem-T-tulo-1-01.jpg',  
    preco: '35.90', descricao: 'Cadeira de jantar com design moderno e confortável.'},
    
    {nome: 'Poltrona branca Combinare', 
    img: 'https://i.postimg.cc/3yzrn01s/Sem-T-tulo-1-02.jpg',
    preco: '99.90', descricao: 'Cadeira de escritório ergonômica'},

    {nome: 'Cadeira branca Luxo Sued',
    img: 'https://i.postimg.cc/ZvSbhk1j/Sem-T-tulo-1-03.jpg',
    preco: '59.90', descricao: 'Cadeira de escritório com design moderno e confortável.'},

    {nome: 'Cadeira cinza AM Decor',
    img: 'https://i.postimg.cc/DWSyrPrQ/Sem-T-tulo-1-04.jpg',
    preco: '49.90', descricao: 'Cadeira de escritório com design moderno e confortável.'},
    
    {nome: 'Cadeira preta Combinare',
    img: 'https://i.postimg.cc/D4P2vjhh/Sem-T-tulo-1-05.jpg',
    preco: '19.90', descricao: 'Cadeira de escritório com design moderno e confortável.'},

    {nome: 'Cadeira marrom Luxo Sued',
    img: 'https://i.postimg.cc/bDbyMYFs/Sem-T-tulo-1-06.jpg',
    preco: '59.90', descricao: 'Cadeira de escritório com design moderno e confortável.'},

    {nome: 'Cadeira marrom Séance',
    img: 'https://i.postimg.cc/mhYZyDHn/Sem-T-tulo-1-07.jpg',
    preco: '27.90', descricao: 'Cadeira de escritório com design moderno e confortável.'},

    {nome: 'Cadeira preta Gran Belo',
    img: 'https://i.postimg.cc/v4BQytNR/Sem-T-tulo-1-08.jpg',
    preco: '49.90', descricao: 'Cadeira de escritório com design moderno e confortável.'},
];

function produto (id) {
        Number(id);
        console.log(id);

        sessionStorage.setItem('cadeira', JSON.stringify(cadeiras[id]));
        sessionStorage.setItem('recommended-products', id);
        window.location = '/assets/pages/produto.html';
}