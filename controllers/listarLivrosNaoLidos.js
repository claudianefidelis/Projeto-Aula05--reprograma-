const livros = require("../database")
const read = require('readline-sync')

const listarLivrosNaoLidos = () => {
const opcaoInicial = read.question('Deseja buscar livros não lidos? S/N ').toUpperCase()

const listarLivrosNaoLidos = livros.filter(item => item.leu === false)
    console.table(listarLivrosNaoLidos)

}

module.exports = listarLivrosNaoLidos
