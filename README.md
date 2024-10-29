# produto-api
Repositório destinado para a disciplina de Desenvolvimento Móvel.

## Tecnologias utilizadas

- Node.js
- PostgreSQL

## Pré-requisitos

Antes de começar, você precisará ter instalado:

 - Node.js
 - NPM ou Yarn
 - PostgreSQL


## Configurações

### Clone o repositório

```bash
git clone https://github.com/akiwnl/produto-api.git
```

### Configure o .env

Ao clonar o repositório, será necessário ter o .env configurado corretamente para que o banco de dados seja conectado com sucesso. Para isso, rode o comando abaixo e coloque as informações da sua máquina.
```bash
cp .env.example .env
```

### Executando

Primeiro, entre no diretório onde o projeto foi copiado.
```bash
cd produto-api
```
Instale as dependencias
```bash
npm install
```
ou
```bash
yarn
```

Execute a API
```bash
npm run dev
```
Ao executar a API, a tabela de produtos e o seeding do banco de dados serão feitos automaticamente.
