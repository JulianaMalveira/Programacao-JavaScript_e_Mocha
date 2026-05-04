# Sistema de Login com Testes Automatizados

Este projeto implementa uma função de login com validações de regras de negócio e testes automatizados utilizando Node.js e assert.

---

## 🚀 Objetivo

Simular um sistema simples de autenticação de usuários contendo:

- Validação de email e senha
- Verificação de usuário existente
- Verificação de credencial expirada
- Retorno de mensagens de sucesso e erro
- Testes automatizados para validar os possíveis cenários.

---

## 🧠 Regras de Negócio

A função de login segue as regras abaixo:

- Campos de email e senha não podem estar vazios
- Usuário deve existir no sistema
- Senha deve estar correta
- Usuário não pode estar com credenciais expiradas

---

## 🧪 Testes Automatizados

Foram criados 7 cenários de teste:

### ✔️ Sucesso
- Login realizado com usuário válido e não expirado

### ❌ Erros de autenticação
- Usuário com credenciais expiradas
- Usuário não encontrado
- Senha incorreta

### ❌ Validação de campos
- Email vazio
- Senha vazia
- Email e senha vazios

---

## 🛠️ Tecnologias utilizadas

- Node.js
- JavaScript
- Node Assert
- Mocha

---

## 📁 Estrutura do projeto
Desafio/
│
├── src/
│   └── cadastroDeUsuarios.js
│
├── test/
│   └── cadastroDeUsuarios.test.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

---

## ▶️ Como executar os testes

Instale as dependências (caso necessário):

```bash
npm install

npx mocha

Ou, se estiver configurado no package.json:
npm test
