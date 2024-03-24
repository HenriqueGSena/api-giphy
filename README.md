
# Api Giphy Developers 

O projeto consiste em criar uma tela que consuma os dados de uma api contendo algumas funcinalidades, sendo elas:



## Funcionalidades

- Scroll infinito;
- Opção de busca de gif;
- Uma visualização ampliada do gif selecionado;

## Instalação

Clone o projeto

```bash
  git clone https://github.com/HenriqueGSena/api-giphy.git
```

Entre no diretório do projeto

```bash
  cd api-giphy
```

Instale as dependências

```bash
  npm install
```

Rode o projeto com comando

```bash
npm run start
```

Para realizar o bluid do projeto

```bash
npm run build
```
    
## Documentação da API

#### Retorna todos os itens

```http
  GET https://api.giphy.com/v1/gifs/trending
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `key` | **Obrigatório**. A chave da sua API |
| `offset` | `integer` |  |

#### Retorna um item

```http
  GET https://api.giphy.com/v1/gifs/search
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `api_key` | `key` | **Obrigatório**. A chave da sua API |
| `q` | `string` | **Obrigatório**. |



## Referência

 - [Api Giphy Developers](https://developers.giphy.com/docs/api/#quick-start-guide)

## Stack utilizada

**Front-end:** Vue.js 3, Typescript, Axios, Bootstrap, Bootstrap-Icons;

