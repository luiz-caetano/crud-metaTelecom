Segue um README em português para o seu CRUD:

---

# CRUD de Produtos — Spring Boot + Angular

## 📌 Sobre o Projeto

Este projeto é um **CRUD (Create, Read, Update, Delete)** para gerenciamento de produtos, desenvolvido com:

* **Backend:** Java + Spring Boot
* **Frontend:** Angular
* **Banco de Dados:** (Informe qual banco usou — MySQL, PostgreSQL, etc.)
* **Integração via API REST** com suporte a CORS para acesso local do Angular.

---

## 🚀 Funcionalidades

* **Criar** produto
* **Listar** produtos
* **Atualizar** produto
* **Deletar** produto

---

## 📂 Estrutura Básica

### Backend (`/src/main/java`)

* **`CrudProdutosApplication.java`** — Classe principal para iniciar o Spring Boot.
* **`ProdutoController.java`** — Endpoints REST para manipulação de produtos.
* **`WebConfig.java`** — Configuração de CORS permitindo requisições do Angular.

### Frontend (`/src/app`)

* **`main.ts`** — Arquivo inicial de bootstrap do Angular.
* Componentes Angular para interação com a API.

---

## 🔗 Endpoints da API

| Método | Rota                  | Descrição                  |
| ------ | --------------------- | -------------------------- |
| POST   | `/produtos/criar`     | Cria um novo produto       |
| GET    | `/produtos/listar`    | Lista todos os produtos    |
| PUT    | `/produtos/atualizar` | Atualiza um produto        |
| DELETE | `/produtos/delete`    | Deleta um produto (por ID) |

---

## ⚙️ Como Executar

### Backend (Spring Boot)

1. Instale o **Java 17+** e o **Maven**.
2. Configure o banco de dados no `application.properties`.
3. No terminal, execute:

   ```bash
   mvn spring-boot:run
   ```
4. API será iniciada em: `http://localhost:8080`

### Frontend (Angular)

1. Instale o **Node.js 18+**.
2. Na pasta do frontend, instale as dependências:

   ```bash
   npm install
   ```
3. Inicie o servidor Angular:

   ```bash
   ng serve
   ```
4. Acesse: `http://localhost:4200`

---

## 📌 Observações

* A configuração de **CORS** no backend (`WebConfig.java`) permite requisições do `http://localhost:4200`.
* Certifique-se que o backend esteja rodando antes de iniciar o frontend.
* Para deploy em produção, ajuste as URLs e configurações de segurança.

---

## 📜 Licença

Este projeto é de uso livre para fins de estudo e testes.

---

Se quiser, posso já deixar esse README formatado com **exemplo de request e response JSON** para cada endpoint, para seu vídeo do processo seletivo ficar mais completo. Quer que eu adicione?
