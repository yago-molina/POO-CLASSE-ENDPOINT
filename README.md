# Atividade de Pesquisa POO, CLASSE + ENDPOINT

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SENAI](https://img.shields.io/badge/SENAI-Cruzeiro-red?style=for-the-badge)

[cite_start]Este repositório contém a entrega da **Atividade de Pesquisa 2 - Back-End** do curso de Programação do SENAI Cruzeiro[cite: 1, 6]. 

O grande diferencial deste projeto é a construção de uma **API REST puramente nativa** utilizando apenas o módulo `http` do Node.js, sem o auxílio de frameworks como o Express. [cite_start]O objetivo é solidificar os fundamentos do protocolo HTTP, Roteamento nativo e Programação Orientada a Objetos (POO)[cite: 4, 14, 60].

---

## 🎯 Objetivos da Atividade

* [cite_start]**POO na Prática:** Modelar e implementar a classe `Mensagem` aplicando conceitos rígidos de **Encapsulamento** (atributos privados) e **Responsabilidade Única**[cite: 56, 71].
* [cite_start]**Serialização JSON:** Criação de métodos seguros para expor dados privados da classe em formato JSON[cite: 34, 72].
* [cite_start]**Endpoints REST:** Expor a classe através de um endpoint utilizando o verbo HTTP `GET`[cite: 32, 57, 73].
* [cite_start]**Comunicação Cliente-Servidor:** Entender o fluxo de requisição e resposta (Request/Response) e manipulação de parâmetros de URL (Query Strings)[cite: 61].

---

## 🛠️ Tecnologias Utilizadas

* **Back-End:** Node.js (Vanilla / Módulos Nativos `http` e `url`)
* **Front-End (Teste):** HTML5 e JavaScript Vanilla (Fetch API e History API)
* [cite_start]**Testes de API:** Postman / Insomnia 

---

## 📂 Estrutura do Projeto

[cite_start]O projeto foi dividido separando claramente as responsabilidades do Servidor (API) e do Cliente (Interface)[cite: 61, 62]:

```text
📦 raiz-do-projeto
 ┣ 📜 mensagem.js    # Classe de molde com atributos encapsulados e método toJSON()
 ┣ 📜 server.js      # Servidor HTTP nativo, roteamento nativo e tratamento de CORS
 ┣ 📜 index.html     # Interface visual para consumo da API
 ┗ 📜 script.js      # Lógica de Front-End (Fetch, validação e manipulação de URL)
