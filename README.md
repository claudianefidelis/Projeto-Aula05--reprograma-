## PRIMEIRO PROJETO {Reprograma}


### O que vimos nas ultimas 3 semanas:
  - Tipos de dados, Variáveis e Operadores
  - Declaração de Funções, anônimas e arrow function
  - Estrutura condicional: if..else, switch...case e ternário
  - Estrutura de repetição: for, while e do...while
  - Objetos e Arrays: Destructuring, spread operator, criar, acessar, incluir e deletar item 
  - Métodos de iteração: sort, map, reduce, filter e find


### `Tecnologias`
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `npm` | Gerenciador de pacotes|
| `readline-sync` | Dependência para receber inputs no terminal|
| 


### `Arquitetura`

```
 📁 projeto-de-livros
   |- 📁 controllers
   |     |- 📄 buscarLivros.js
   |     |- 📄 listarRecomendados.js
   |     |- 📄 listarLivrosNaoLidos.js
   |     |- 📄 listarLivrosOrdenados.js
   |- 📁 node_modules
   |- 📄 app.js
   |- 📄 database.js
   |- 📄 .gitignore
   |- 📄 package.json  
   |- 📄 package-lock.json
```


### `Requisitos`

- [ ]  **`buscarLivros`** Deverá ser possível buscar livros pela categoria
- [ ]  **`listarLivrosOrdenados`** Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas.
- [ ]  **`listarRecomendados`** Deverá listar livros que já foram lidos e que são recomendados
- [ ]  **`listarLivrosNaoLidos`** Deverá listar livros que ainda não foram lidos 