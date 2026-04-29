
// 1) Criar um vetor com 5 livros contendo as seguintes propriedades: ID, titulo, tema, preco.

const livros = [
    {
        id: 1,
        titulo: 'Comer, Rezar e Amar',
        tema: 'Romance',
        preco: 49.99
    },

    {
        id: 2,
        titulo: 'A Culpa é das Estrelas',
        tema: 'Romance',
        preco: 39.90
    },
    {
        id: 3,
        titulo: 'O Hobbit',
        tema: 'Fantasia',
        preco: 59.90
    },
    {
        id: 4,
        titulo: '1984',
        tema: 'Ficção',
        preco: 45.00
    },
    {
        id: 5,
        titulo: 'Orgulho e Preconceito',
        tema: 'Romance',
        preco: 34.90
    }

];

// 2) [Básico] Crie uma função que receba o ID de um livro e retorne o seu titulo. Exemplo de chamada da função:
//    buscarTituloDoLivroPorID(99) -> 'Titulo do Livro de ID 99'

export function buscarTituloDoLivroPorID(id) {
    if (id <= 0) {
        throw new Error('id deve ser maior que zero');
    }
    for (let i = 0; i < livros.length; i++) { // Passar por todos (ou por cada um deles)
        if (livros.at(i).id == id) {
            return livros.at(i).titulo;// Filtrar apenas aqueles que seguem essa regra
        }
    }

    throw new Error('Livro não encontrado');
}


// 4) [Avançado] Validar se o ID foi informado e é maior que 0.
// 5) Escreva dois testes automatizados de unidade para testar as condições de envio incorreto de ID.
// 6) Adicionar o Mochawesome para gerar relatórios em HTML.


/*for (let i = 0; i < produtos.length; i++) {
   if (produtos.at(i).nome.startsWith("iPhone")) { 
       console.log(produtos.at(i).preco);
   }
}
   */

/*for (let i = 0; i < produtos.length; i++) { // Passar por todos (ou por cada um deles)
    if (produtos.at(i).preco < 15000) { // Filtrar apenas aqueles que seguem essa regra
         console.log(produtos.at(i).nome); // O que acontece com os elementos filtrados
    }
}*/