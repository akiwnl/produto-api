## Sobre
O aplicativo foi desenvolvido usando Flutter para a disciplina de Desenvolvimento Móvel da Universidade Tecnológica Federal do Paraná - Campus Campo Mourão, 
com a finalidade de conhecer a tecnologia e ter um primeiro contato com a linguagem.
As funcionalidades presentes no aplicativo são:
  - Cadastro de produtos
  - Edição de produtos
  - Listagem de produtos
  - Deletar produtos

## Instalação
 
Clone o repositório com o seguinte comando:

```bash
git clone https://github.com/akiwnl/produto-api.git
```

Na sequência, acesse o diretório do repositório clonado e instale as dependências do projeto, com o seguinte comando:

```bash
npm install
```

Na sequência é necessário criar um arquivo `.env`. O modelo pode ser encontrado no arquivo `.env.example` localizado na raiz do projeto.

Não esqueça de colocar os dados corretamente para a conexão com o banco de dados ser feita com sucesso!

```bash
cp .env.example .env
```

Após a criação do arquivo `.env`, será necessário rodar o docker. Para isso, deve-se utilizar o comando:

```bash
docker compose up -d
```

Com o .env devidamente configurado, é necessário executar o comando para criar a tabela no banco de dados.
Com esse script, o banco de dados será preenchido com alguns dados fictícios.

```bash
 node .\src\db.js
```

Em seguida, use o seguinte comando para inicializar a aplicação. 

```bash
npm run dev
```

Para uma experiência melhor, foi criado uma aplicação front-end.
Mais detalhes podem ser encontados aqui: [produto-front](https://github.com/akiwnl/produto-front)

## Autor
  - Kaike Carvalho - kaikecarvalho@alunos.utfpr.edu.br
