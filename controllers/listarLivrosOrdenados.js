const livros = require('../database')
const read = require('readline-sync')

const listarLivrosOrdenados = () => {
const listarLivrosOrdenados = read.question('Deseja buscar livros ordenados? S/N ').toUpperCase()

const livrosOrdemCrescente = livros.sort((livro1,livro2) => livro1.paginas - livro2.paginas)
    console.table(livrosOrdemCrescente)
}

module.exports = listarLivrosOrdenados