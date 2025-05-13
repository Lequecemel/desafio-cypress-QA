# Desafio Cypress QA

Este projeto contém testes automatizados utilizando o Cypress para simular funcionalidades de um e-commerce.

## 🔧 Tecnologias utilizadas

- [Cypress](https://www.cypress.io/)
- Node.js

## 📁 Estrutura do Projeto

- `cypress/`: Pasta onde ficam os testes.
- `cypress/e2e/`: Contém os testes automatizados.
- `cypress.config.js`: Configurações do Cypress.
- `package.json`: Dependências do projeto.

## 🚀 Como instalar e executar os testes

1. Clone este repositório:

   ```bash
   git clone https://github.com/Lequecemel/desafio-cypress-QA.git

2. Acesse a pasta do projeto:
cd desafio-cypress-QA

3. Instale as dependências:
npm install

4. Execute o Cypress:
npx cypress open
Isso abrirá a interface gráfica do Cypress, onde você pode rodar os testes.

5. Cenários Automatizados

Funcionalidade: Fluxo de navegação e adição ao carrinho

Cenário 1: Usuário acessa a página de produtos
Dado que o usuário acessa a home page
Quando ele navega até a seção de produtos
Então a lista de produtos deve ser exibida corretamente

Cenário 2: Usuário adiciona um produto ao carrinho
Dado que o usuário está na página de produtos
Quando ele clica em "Add to cart"
Então o produto é adicionado com sucesso ao carrinho