
---

# CRUD de Produtos — Spring Boot + Angular + PostgreSQL

## 📌 Sobre o Projeto

Este projeto é um **CRUD (Create, Read, Update, Delete)** para gerenciamento de produtos, desenvolvido com:

* **Backend:** Java + Spring Boot
* **Frontend:** Angular
* **Banco de Dados:** PostgreSQL
* **Integração:** API REST com suporte a CORS para acesso local do Angular.

---

## 🚀 Funcionalidades

* **Criar** produto
* **Listar** produtos
* **Atualizar** produto
* **Deletar** produto

---

## 📂 Estrutura de Pastas

### **Backend** (`/src/main/java/com/metatelecom/crud`)

* **`config/WebConfig.java`** — Configuração de CORS para permitir comunicação com o Angular.
* **`controller/ProdutoController.java`** — Endpoints REST para manipulação de produtos.
* **`model/Produto.java`** — Entidade que representa o produto.
* **`repository/ProdutoRepository.java`** — Interface de acesso ao banco de dados.
* **`service/ProdutoService.java`** — Regras de negócio.
* **`CrudProdutosApplication.java`** — Classe principal para iniciar o Spring Boot.

### **Frontend** (`/src/app`)

* **`core/models/produto.ts`** — Modelo de dados do produto no Angular.
* **`core/services/produto.service.ts`** — Serviço para comunicação com a API.
* **`features/produto`**

  * **`produto.component.ts` / `.html` / `.css`** — Componente principal do CRUD.
  * **`produto-form.html`** — Formulário para cadastro/edição.

---

## 🔗 Endpoints da API

| Método | Rota                  | Descrição                  | Exemplo de Uso                                        |
| ------ | --------------------- | -------------------------- | ----------------------------------------------------- |
| POST   | `/produtos/criar`     | Cria um novo produto       | `{ "nome": "Teclado", "preco": 120.50 }`              |
| GET    | `/produtos/listar`    | Lista todos os produtos    | —                                                     |
| PUT    | `/produtos/atualizar` | Atualiza um produto        | `{ "id": 1, "nome": "Mouse Gamer", "preco": 250.00 }` |
| DELETE | `/produtos/delete`    | Deleta um produto (por ID) | `/produtos/delete?id=1`                               |

---

## ⚙️ Como Executar

### **Backend (Spring Boot)**

1. Instale o **Java 17+** e o **Maven**.
2. Configure o PostgreSQL:

   ```sql
   CREATE DATABASE crud_produtos;
   ```
3. No arquivo `application.properties`, configure:

   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/crud_produtos
   spring.datasource.username=seu_usuario
   spring.datasource.password=sua_senha
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   ```
4. No terminal, execute:

   ```bash
   mvn spring-boot:run
   ```
5. API disponível em: `http://localhost:8080`

---

### **Frontend (Angular)**

1. Instale o **Node.js 18+** e o **Angular CLI**:

   ```bash
   npm install -g @angular/cli
   ```
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

* O **CORS** já está configurado no backend para aceitar requisições do Angular.
* Certifique-se que o backend esteja rodando antes de iniciar o frontend.
* Para deploy em produção, altere as URLs da API no frontend e as configurações do banco no backend.

---
