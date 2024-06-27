function calcularOValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acumulador, livro) => acumulador + livro.preco, 0).toFixed(2); //acumulador vai receber os valores de cada livro e o 0 (zero) é referente à qual índice do elemento que vai começar essa soma.
}