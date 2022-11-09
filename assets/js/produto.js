let cadeiras = [
    {nome: "Sofá branco D'Rossi", 
    img: 'https://i.postimg.cc/5YVx3K8g/Sem-T-tulo-1-01.jpg',  
    preco: '385.90', descricao: 'Sofá branco de dois lugares com dois travesseiros e pés metálicos'},
    
    {nome: 'Cadeira branca Combinare', 
    img: 'https://i.postimg.cc/LnXmN1gc/Sem-T-tulo-1-02.jpg',
    preco: '99.90', descricao: 'Cadeira branca estofada acompanhada de uma almofada com pernas de madeira clara"'},

    {nome: 'Cadeira branca Luxo Sued',
    img: 'https://i.postimg.cc/xqg0vR8G/Sem-T-tulo-1-03.jpg',
    preco: '59.90', descricao: 'Cadeira branca estofada com pernas de madeira preta e detalhes circulares'},

    {nome: 'Cadeira cinza AM Decor',
    img: 'https://i.postimg.cc/BLBJw5g0/Sem-T-tulo-1-04.jpg',
    preco: '49.90', descricao: 'Cadeira de escritório com design moderno e confortável.'},
    
    {nome: 'Banco preto Combinare',
    img: 'https://i.postimg.cc/zHDqmLtR/Sem-T-tulo-1-05.jpg',
    preco: '19.90', descricao: 'Banco de madeira preta tamanho baixo.'},

    {nome: 'Cadeira branca Séance',
    img: 'https://i.postimg.cc/QVj8KP8x/Sem-T-tulo-1-06.jpg',
    preco: '59.90', descricao: 'Cadeira de branca na cor marrom com braços altos e pés de madeira com detalhes circulares'},

    {nome: 'Cadeira branca Herman Miller',
    img: 'https://i.postimg.cc/4mSsMxzm/Sem-T-tulo-1-07.jpg',
    preco: '229.90', descricao: 'Cadeira de escritório branca com rodinhas e pés metálicos.'},

    {nome: 'Cadeira cinza Gran Belo',
    img: 'https://i.postimg.cc/k2RqdPcw/Sem-T-tulo-1-08.jpg',
    preco: '55.90', descricao: 'Cadeira de escritório com design moderno e confortável.'},

    {nome: 'Cadeira Herman Miller',
    img: 'https://i.postimg.cc/F1CMFn16/Sem-T-tulo-1-09.jpg',
    preco: '24.90', descricao: 'Cadeira de escritório branca com rodinhas e pés metálicos.'},

    {nome: 'Cadeira Herman Miller',
    img: 'https://i.postimg.cc/SJXwn7Mx/Sem-T-tulo-1-10.jpg',
    preco: '24.90', descricao: 'Cadeira de escritório branca com rodinhas e pés metálicos.'},

    {nome: 'Cadeira Herman Miller',
    img: 'https://i.postimg.cc/06v3XTHz/Sem-T-tulo-1-11.jpg',
    preco: '24.90', descricao: 'Cadeira de escritório branca com rodinhas e pés metálicos.'},

    {nome: 'Cadeira Herman Miller',
    img: 'https://i.postimg.cc/zyK6jzpm/Sem-T-tulo-1-12.jpg',
    preco: '24.90', descricao: 'Cadeira de escritório branca com rodinhas e pés metálicos.'},

    {nome: 'Cadeira Herman Miller',
    img: 'https://i.postimg.cc/dZhSTwDx/Sem-T-tulo-1-13.jpg',
    preco: '24.90', descricao: 'Cadeira de escritório branca com rodinhas e pés metálicos.'},

    {nome: 'Cadeira Herman Miller',
    img: 'https://i.postimg.cc/jnnZScFV/Sem-T-tulo-1-14.jpg',
    preco: '24.90', descricao: 'Cadeira de escritório branca com rodinhas e pés metálicos.'}
];

function produto (id) {
        Number(id);
        console.log(id);

        sessionStorage.setItem('cadeira', JSON.stringify(cadeiras[id]));
        //sessionStorage.setItem('recommended-products', id);
        window.location = '/assets/pages/produto.html';
}