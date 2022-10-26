let cadeiras = [
    {nome: "Cadeira branca D'Rossi", 
    img: 'https://images2.imgbox.com/87/81/zO1X3s6c_o.jpg',  
    preco: '35.90', descricao: 'Cadeira de jantar com design moderno e confortável.'},
    
    {nome: 'Poltrona branca Combinare', 
    img: 'https://images2.imgbox.com/7a/ea/niaHEY1U_o.jpg',
    preco: '99.90', descricao: 'Cadeira de escritório ergonômica'},

    {nome: 'Cadeira branca Luxo Sued',
    img: 'https://images2.imgbox.com/4b/ec/Po3lv6D0_o.jpg',
    preco: '59.90', descricao: 'Cadeira de escritório com design moderno e confortável.'},

    {nome: 'Cadeira cinza AM Decor',
    img: 'https://images2.imgbox.com/54/96/yntWwR7l_o.jpg',
    preco: '49.90', descricao: 'Cadeira de escritório com design moderno e confortável.'},
    
    {nome: 'Cadeira preta Combinare',
    img: 'https://images2.imgbox.com/23/06/4DHVJYO2_o.jpg',
    preco: '19.90', descricao: 'Cadeira de escritório com design moderno e confortável.'},
];

function produto (id) {
        Number(id);
        console.log(id);

        sessionStorage.setItem('cadeira', JSON.stringify(cadeiras[id]));
        sessionStorage.setItem('recommended-products', id);
        window.location = '/assets/pages/produto.html';
}