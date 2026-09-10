# 🍕 Pizzaria - Sistema de Gestão de Pedidos (Web & Mobile)

<p align="center">
  <img src="logo.png" alt="Logo do Projeto" width="180px"/>
</p>

<p align="center">
  <b>Uma solução full-stack moderna para controle de mesas, comanda eletrônica e gerenciamento de pedidos em tempo real para pizzarias e restaurantes.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma"/>
</p>

---

## 📌 Sobre o Projeto

O **Pizzaria** é uma plataforma desenvolvida para otimizar o atendimento de estabelecimentos gastronômicos. O ecossistema unifica o cadastro de produtos, gestão de estoque de cardápio, abertura e encerramento de comandas na cozinha (via Web Dashboard) e atendimento presencial ágil (via App Mobile).

---

## ✨ Funcionalidades

### ⚙️ Backend (API REST)
* 🔐 **Autenticação JWT:** Login seguro com níveis de permissão e criptografia de senhas.
* 📂 **Gestão de Categorias & Produtos:** Cadastro, listagem e alteração de cardápio com suporte a upload de imagens (`Multer`).
* 📝 **Controle de Pedidos:** Abertura de mesas, adição/remoção de itens, envio de comanda para a cozinha e finalização de pedidos.

### 🖥️ Frontend Web (Dashboard do Administrador/Cozinha)
* 📊 **Painel de Controle:** Visualização em tempo real de comandas abertas.
* 🍽️ **Detalhes do Pedido:** Modal dinâmico para acompanhamento de itens por mesa.
* 🛠️ **Área Administrativa:** Cadastro de novas categorias de pizzas/bebidas e produtos.

### 📱 Aplicação Mobile (Atendimento no Salão)
* 📲 **Comanda Digital:** Garçons abrem mesas e registram pedidos diretamente pelo smartphone.
* ⚡ **Sincronização Rápida:** Envio imediato dos pedidos para a cozinha/painel web.

---

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologia |
| :--- | :--- |
| **Backend** | Node.js, Express, TypeScript, Prisma ORM, PostgreSQL/SQLite, JWT, Multer |
| **Frontend Web** | Next.js (App Router), React, Sass (SCSS Modules), Axios, JS-Cookie |
| **Mobile** | React Native, Expo, TypeScript, React Navigation, Axios |

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
* Node.js (v18+)
* Gerenciador de pacotes (`npm` ou `yarn`)

### 1. Clonar o Repositório
```bash
git clone [https://github.com/LucasNPADev/p04_pizzaria_LucasNegreiros.git](https://github.com/LucasNPADev/p04_pizzaria_LucasNegreiros.git)
cd p04_pizzaria_LucasNegreiros
