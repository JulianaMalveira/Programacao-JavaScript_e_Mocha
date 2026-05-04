# Projeto de Login com Testes Automatizados (Node.js + Mocha)

![Status](https://img.shields.io/badge/tests-passing-brightgreen)

---

## 📌 Descrição

Este projeto simula um sistema de autenticação de usuários com validações de regras de negócio e testes automatizados usando Node.js e Mocha.

---

## 🚀 Objetivo

Praticar lógica de programação e testes automatizados, simulando um sistema real de login com validações de segurança.

---

## 🧠 Regras de Negócio

- Email e senha não podem estar vazios
- Usuário deve existir no sistema
- Senha deve estar correta para o usuário
- Usuário não pode estar com credenciais expiradas

---

## 🧪 Cenários de Teste

### ✔️ Sucesso
- Login realizado com usuário válido e não expirado

### ❌ Erros de autenticação
- Credencial expirada
- Usuário não encontrado
- Senha incorreta para usuário válido

### ❌ Validação de campos
- Email vazio
- Senha vazia
- Email e senha vazios

---

## 📁 Estrutura do projeto

```txt
Desafio/
│
├── src/
│   └── cadastroDeUsuarios.js
│
├── test/
│   └── cadastroDeUsuarios.test.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🛠️ Tecnologias utilizadas

- JavaScript 
- Node.js
- Mocha
- Node Assert

---

## ▶️ Como executar os testes

Instalar dependências:

```bash
npm install
```

Rodar testes:

```bash
npx mocha
```

ou:

```bash
npm test
```

---

## 📌 Aprendizados

- Lógica de autenticação de usuários
- Estrutura de funções em JavaScript
- Validação de entrada de dados
- Tratamento de erros com `throw`
- Testes automatizados com Mocha
- Organização de projeto Node.js

---

## 👩‍💻 Autora
Juliana Malveira
Projeto desenvolvido para prática de testes automatizados e lógica de programação em JavaScript.


