const livros = require('../database')
const read = require('readline-sync')


const livrosRecomendados = () => {
    const pergunta = read.question('Deseja ver os livros lidos e recomendados? S/N ').toUpperCase()
    if (pergunta === 'S') {
        const livrosRecomendados = livros.filter(livro => livro.recomenda === true)
        console.table(livrosRecomendados)

    }else 
        return 'Ok =)'
}
module.exports = livrosRecomendados