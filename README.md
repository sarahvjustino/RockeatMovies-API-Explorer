# RocketMovies API Explorer

Bem-vindo ao RocketMovies API Explorer! Esta é a minha primeira aplicação em Node.js, desenvolvida para permitir que os usuários cadastrem informações sobre filmes, como nome, descrição, notas e criem tags para facilitar a identificação posterior.

## Tecnologias Utilizadas

- Node.js
- Express.js
- SQLite
- Knex.js
- Bcrypt (para segurança de senhas)

## Começando

Siga as instruções abaixo para configurar e executar esta API em sua máquina local.

### Pré-requisitos

Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Você pode fazer o download em [nodejs.org](https://nodejs.org/).

### Instalação

1. Clone este repositório para o seu sistema local:

```bash
git clone https://github.com/sarahvjustino/RocketMovies-API-Explorer.git

```

Navegue até o diretório do projeto:

```bash
cd RocketMovies-API-Explorer

```

Instale as dependências usando npm:

```bash
npm install

```

### Configuração do Banco de Dados

Esta aplicação utiliza o SQLite como banco de dados. Execute o seguinte comando para criar as tabelas necessárias:

```bash
npm run migrate

```

### Iniciando o Servidor

Agora você está pronto para iniciar o servidor da API:

```bash
npm start

```

O servidor será executado em http://localhost:3000.
