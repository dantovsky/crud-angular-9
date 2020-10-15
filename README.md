 
# Projeto CRUD com Angular 9 - COD3R
Repositório do curso: https://github.com/cod3rcursos/angular-crud

# Comandos importante

npm init -y                 Iniciar o arquivo package.json
npm i -g @angular/cli       Command line do Angular
ng new minha-app            Criar novo projeto Angular

# TypeScript

Superset do JavaScript.

- Orientada a objetos
- Tipagem forte
- Decorator
- Interfaces

# Preparação do backend

// --- crud/backend

npm init -y
npm i json-server

O JSON Server lê um arquivo que tem um JSON, cira uma API baseada neste JSON.

// --- crud/backend/db.json

```json
{
    "products": [
        {
            "id": 1,
            "name": "Caneta BIC Preta",
            "price": 5.89
        },
        {
            "id": 2,
            "name": "Notebook Mac Pro",
            "price": 12000.89
        },
        {
            "id": 3,
            "name": "Samsumg S20+",
            "price": 5000.89
        }
    ]
}```

Criou-se um script para iniciar o backend:

"scripts": {
    "start": "json-server --watch db.json --port 3001"
},

Exemplos de uso:

GET :: http://localhost:3001/products
POST :: body >> url-encoded
    name: Geladeira
    peice: 1913.99

# Frontend Angular » Árvore de componentes

Exemplo de uma árvore de componente que compõe uma app:

AppComponent (raíz da app)
    Header
        Nav
            List
                Item
                Item
    Content
        ContentTitle
        ProductCrud
            ProductForm
                Input
                Button