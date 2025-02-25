# CRUD com Jest e Express

Este projeto é um exemplo de **CRUD (Create, Read, Update, Delete)** com testes automatizados usando **Jest** e **Express**. Ele inclui uma interface gráfica simples para interagir com os dados.

---

## 🚀 Funcionalidades

- **Criar um item**: Adiciona um novo item à lista.
- **Listar todos os itens**: Exibe todos os itens cadastrados.
- **Buscar um item por ID**: Retorna um item específico com base no ID.
- **Atualizar um item**: Atualiza o nome e/ou preço de um item existente.
- **Deletar um item**: Remove um item da lista.

---

## 📌 Como Rodar o Projeto

### 🔹 Pré-requisitos

- **Node.js** instalado.
- **NPM** ou **Yarn** instalado.

### 🔹 Passos

1. **Clone o repositório**:
   git clone https://github.com/seu-usuario/crud-jest.git

2. **Acesse a pasta do projeto**:
   cd crud-jest

3. **Instale as dependências**:
    npm install

4. **Inicie o servidor**:
    npm start

5. **Acesse a interface gráfica**:
    Abra o navegador e acesse http://localhost:3000.

6. **Execute os testes automatizados**:
    npm test

## 📂 Estrutura do Projeto

crud-jest/
├── public/                  # Arquivos estáticos (front-end)
│   └── index.html           # Interface gráfica
├── src/                     # Código fonte do back-end
│   ├── crud.js              # Lógica do CRUD
│   └── server.js            # Ponto de entrada do servidor
├── tests/                   # Testes automatizados
│   └── crud.test.js         # Testes do CRUD
├── .gitignore               # Arquivos ignorados pelo Git
├── package.json             # Dependências e scripts
├── package-lock.json        # Versões exatas das dependências
└── README.md                # Documentação do projeto

## 🛠 Tecnologias Utilizadas
- **Node.js** → Ambiente de execução JavaScript.
- **Express** → Framework para criar o servidor.
- **Jest** → Framework para testes automatizados.
- **HTML/CSS/JavaScript** → Interface gráfica.