 
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
}
```

Criou-se um script para iniciar o backend:

```json
"scripts": {
    "start": "json-server --watch db.json --port 3001"
},
```

Exemplos de uso:

GET :: http://localhost:3001/products
POST :: body >> url-encoded
    name: Geladeira
    peice: 1913.99

# Frontend Angular » Árvore de componentes

Exemplo de uma árvore de componente que compõe uma app:

```js
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
```

# Fluxo da inicialização da App

```c#
main.ts
    |--[chama]--> Appmodule
                        |--[chama]--> AppComponent 
                                            |--[chama]--> CustomComponentA ...
                                            |--[chama]--> CustomComponentB ...
                                            |--[chama]--> CustomComponentC ...
```

Em Angular criamos os componentes e podemos colocar esses componenentes dentro de módulos, e definir se estes componentes irão ficar visíveis apenas para dentro do módulo ou se terão visibilidade para fora do módulo.

Existe inicialmente o AppModulo, que é usado para inicializar a App. Dentro do AppModule tem um atributo chamado Bootstrap que aponta para o componente AppComponente (criado por padrão).
O AppComponent faz referência aos demais componentes filhos da App.

## Organização usando módulo

Neste gráfico existe apenas um componente que poderia ficar visível apenas dentro do módulo, o componente "H". Por que? O componente H é apenas referenciado pelo componente "G" está dentro do mesmo módulo do componente "H". Todos os outros componetes são referenciados por componentes que estão em outros módulos, ou seja, todos os outros componentes precisam estar exportos para que possam ser referenciados pelos outro componentes.

Ex: os módulos "E" e "F" precisam estar exportos para fora do módulo para que ele possa ser referenciado pelo componente B.

![Organização Usando Módulo](oraganizacao-usando-modulo.png)
