# CES-26: Serie de Exercicios 5 - React
Projeto para implementacao de uma calculadora em React Native.

### Tecnologias
Projeto desenvolvido com [React](https://pt-br.reactjs.org/).

### Execucao
Para executar no computador, deve ser rodado em dois terminais.

No primeiro terminal, execute:

```bash
$ npm run client
```

No segundo terminal, execute:

```bash
$ npm run server
```

### Estrutura de arquivos principais
```js
- public
  |- index.css
  |- index.html
  |- index.js
 - server
  |- index.js
 - src
  |- index.js
```

### Arquivo public/index.css
Estabelece o estilo dos componentes do HTML principal.

### Arquivo public/index.html
Implementa o HTML visualizado na pagina.

### Arquivo public/index.js
Implementa as funçoes em JQuery necessarias para exibicao dos resultados salvos.

### Arquivo server/index.js
Implementa todas as rotas a serem chamadas no servidor (getData e postData), alem de estabelecer a conexao na porta 3000.

### Arquivo src/index.js
Determina a classe MyForm, a ser renderizada pelo React com a estrutura do formulario.
