# 📚 Gestão de Livros com JavaScript e Testes Automatizados

Projeto simples desenvolvido para praticar lógica de programação em JavaScript e testes automatizados utilizando Mocha.

---

## 🚀 Objetivo

Implementar e testar funções relacionadas à gestão de livros, garantindo:

* Validação de entradas
* Tratamento de erros
* Retorno correto dos dados
* Cobertura de cenários positivos e negativos

---

## 🧪 Tecnologias utilizadas

* JavaScript (Node.js)
* Mocha (framework de testes)
* Mochawesome (geração de relatórios)
* Git e GitHub (versionamento)

---

## 📂 Estrutura do projeto

```
├── src/
│   └── gestaoLivros.js
├── test/
│   └── gestaoLivros.test.js
├── mochawesome-report/
├── package.json
├── package-lock.json
└── README.md
```

---

## ▶️ Como executar o projeto

### 1. Instalar dependências

```bash
npm install
```

---

### 2. Rodar os testes

```bash
npm test
```

---

## 📊 Relatórios de teste

Após executar os testes, será gerado um relatório em:

```
mochawesome-report/report.html
```

Esse relatório contém:

* Total de testes executados
* Testes aprovados e falhados
* Tempo de execução
* Detalhes de cada cenário

---

## ✅ Cenários testados

A função `buscarTituloDoLivroPorID` cobre os seguintes casos:

* ✔️ Retorno correto para ID válido
* ❌ Erro quando o ID não existe
* ❌ Erro quando o ID é menor que 1
* ❌ Erro para valores nulos (`null`)
* ❌ Erro para valores indefinidos (`undefined`)
* ❌ Erro para números negativos

---

## 🧠 Boas práticas aplicadas

* Separação entre código e testes
* Uso de testes automatizados
* Validação de entradas
* Versionamento com Git
* Uso de `.gitignore` para evitar arquivos desnecessários

---

## 💡 Observações

* A pasta `node_modules` não é versionada
* Relatórios de teste não são enviados para o repositório
* O arquivo `package-lock.json` garante consistência nas dependências

---

## 👩‍💻 Autor

Juliana Malveira  
QA | Senior Test Analyst  

Projeto desenvolvido para fins de estudo e prática em testes automatizados.

---

