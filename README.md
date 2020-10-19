# Material do curso "Angular 9 - Essencial", pela COD3R  
Os principais recursos do framework à partir da construção de uma aplicação para aplicar um CRUD. https://www.cod3r.com.br/courses/angular-9-essencial

![Demonstração Angular 9 - Essencial](angular-essencial-demo.gif)

## Repositório Git do curso
https://github.com/cod3rcursos/angular-crud

# Como rodar o projeto

1. Entrar na pasta "backend" e rodar o comando: **npm start**
2. Entrar na pasta "frontend" e rodar o comando: **npm start**
3. Aceder pelo browser o endereço **http://localhost:4200**

# Comandos utilizados

Geral

- npm init -y                 => Iniciar o arquivo package.json
- npm i -g @angular/cli       => Command line do Angular
- ng new minha-app            => Criar novo projeto Angular

Angular 

- npm i -g @angular/cli                 => Instalação do Angular CLI (Command Line Interface)
- ng new fronted --minimal              => Criação do profeto frontend (--minimal elimina arquivos desnecessários)
- sudo npm start                        => Inicia a app Angular (executa o "ng serve")
- ng generate component comp/header     => Cria um componente HeaderComponent dentro de "comp"
- ng g c                                => Forma reduzida do comando "ng generate component app-name"
- ng g s comp/template/header/header    => Forma reduzida do comando "ng generate service service-name"
- ng g d directives                     => Forma reduzida do comando "ng generate directive directive-name"

Angular Material

- ng add @angular/material

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

# Fluxo de inicialização da App
![Fluxo de inicialização da app](fluxo-init-app.png)

    Nota: O "AppComponent" tem um seletor raiz que vai ser invocado no arquivo index.html.

Em Angular criamos os componentes e podemos colocar esses componenentes dentro de módulos, e definir se estes componentes irão ficar visíveis apenas para dentro do módulo ou se terão visibilidade para fora do módulo.

Existe inicialmente o AppModulo, que é usado para inicializar a App. Dentro do AppModule tem um atributo chamado Bootstrap que aponta para o componente AppComponente (criado por padrão).
O AppComponent faz referência aos demais componentes filhos da App.

# Organização usando módulo

Neste gráfico existe apenas um componente que poderia ficar visível apenas dentro do módulo, o componente "H". Por que? O componente H é apenas referenciado pelo componente "G" está dentro do mesmo módulo do componente "H". Todos os outros componetes são referenciados por componentes que estão em outros módulos, ou seja, todos os outros componentes precisam estar exportos para que possam ser referenciados pelos outro componentes.

Ex: os módulos "E" e "F" precisam estar exportos para fora do módulo para que ele possa ser referenciado pelo componente B.

![Organização Usando Módulo](oraganizacao-usando-modulo.png)

# Anatomia do módulo

![Anatomia do módulo](anatomia-modulo.png)

Existem 5 atributos dentro de um módulo, que são usados para configurá-lo:
- Declarations
- Imports
- Exports
- Providers
- Bootstrap

# Criação de app Angular e configs básicas

- npm i -g @angular/cli             Instalação do Angular CLI (Command Line Interface)
- ng new fronted --minimal          Criação do profeto frontend (--minimal elimina arquivos desnecessários)
- sudo npm start                    Inicia a app Angular (executa o "ng serve")

## Configs básicas

Alteração dos atributos inlineTemplate e inlineStyle para "false", para que estejam em arquivos separados, e não na forma inline.

```json
...
        @schematics/angular:component": {
          "inlineTemplate": false,
          "inlineStyle": false,
          "skipTests": true
        },
...
```

# Instalção do Angular Material

- ng add @angular/material

Opções do diálogo selecionadas:
? Choose a prebuilt theme: Indigo/Pink [ Preview: https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? Yes
? Set up browser animations for Angular Material? Yes

# Criação de componente

- ng generate component comp/header     => Cria um componente HeaderComponent dentro de "comp"
- ng g c                                => Forma reduzida do comando "ng generate component app-name"

Formato básico do arquivo **header.component.ts**:

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```

    Após a criação do componente pelo Angular CLI, ele se encarregará de importar e declarar o novo componente no arquivo **app.module.ts**

```ts
import { HeaderComponent } from './components/template/header/header.component';

@NgModule({
    declarations: [
    AppComponent,
    HeaderComponent
    ], ...
})
export class AppModule { }
```

# Aula 16 - Bindins

- Event Binding  
Ligação de evento, ou seja, chamar uma função dentro de uma clsasse de um componente. Ex:
    ```js
    (click)="myFunction()"
    ```

- Binding de atributos  
Atribuir a um atributo de um determinado elemento, um valor que está dentro do seu componente. Ex:
    ```js
    [id]="propertyVariable"
    ```

- Two Way Databinding  
Diretiva não estrutural que liga um campo de formulário aos dados, onde a sua modificação acontece nas duas direções: dados -> formulario e formulario -> dados. Ex:
    ```js
    // Sintae conhecida como "banana na caixa"
    [(ngModel)]="product.name"
    ```
# Conceitos importantes

- Injeção de dependência  
É quando o a linguagem/framework injeta uma dependência dentro de uma determinada classe, ou seja, ela fornece a instancia de algum objeto sem precisar passar isso de forma explícita. Ex:

    ```js
    constructor(private router: Router) { }
    ```
- Singleton  
É uma classe que tem uma única instância. Os valores dos atributos são compartilhados sempre que usar o service, ou seja, estará sendo compartilhado a mesma instância. Ex: ao criar um service, o **"providedIn: root"* indica que se trata de um singleton. Ex de um service usando um snackbar para exibir mensagem:

    ```js
    import { Injectable } from '@angular/core';
    import { MatSnackBar } from'@angular/material/snack-bar';

    @Injectable({
    providedIn: 'root'
    })
    export class ProductService {

    constructor(private snackBar: MatSnackBar) { }

    showMessage(msg: string): void {
        this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
        }) // mensagem, action, atributos
    }
    }
    ```

# Schematics

Usando o Schematics, já recebemos uma tabela pronta, e a partir desse componente pronto, podemos criar um componente que precisamos de uma forma simples.

Install Schematics  
https://material.angular.io/guide/schematics

# Alterando currency / locale de padrão em dolar

Para alterar o curreny / locale para o Brasil:

// --- html

```html
<td mat-cell *matCellDef="let row">{{row.price | currency: 'BRL'}}</td>
```

// --- app.module.ts

```ts
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common'

registerLocaleData(localePt);

@NgModule({
    providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }]
})
```

# Troca de dados entre componentes no Angular

Utilização de BehaviorSubject para permitir que a partir de qualquer outro componente possa alterar atributos do header.

Criação de interface no arquivo:
components/template/header/header-data.model.ts

```ts
export interface HeaderData {
    title: string
    icon: string
    routeUrl: string
}
```

Adição de service:  
ng g s components/template/header/header

```ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }
}
```

A partir de outro componente, por exemplo, o ProductCrudComponent, utilizou-se no contrutor:

```ts
constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
        title: 'Cadastro de Produtos',
        icon: 'storefront',
        routeUrl: '/products'
    }
}
```

# Diretivas

## Diretivas de atributo
Trablha na parte de estilo e de comportamento.

Adição de uma diretiva:  
- ng g d directives/red => Forma reduzida do comando "ng generate directive directive-name"

// --- directives/red

```ts
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b'
  }
}
```

// --- components/template/footer/footer.component.html

```html
<mat-toolbar class="footer">
    <span>
        Desenvolvido com <i class="material-icons v-middle" appRed>favorite</i> por 
        <strong>Cod<span class="red">3</span>r</strong>
    </span>
</mat-toolbar>
```

## Diretivas estruturais
Capaz de mexer e manipular na estrutura da página, sou seja, adiciona e remove elementos na DOM.

Adição de diretiva:  
- ng g d directives/for

Ex:

// --- directives/for.directive.ts

```ts
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[]
  @Input('myForUsando') texto: string // apenas para experimento

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>) {
    console.log('myFor')
  }

  ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, { $implicit: number })
    }
    // *** //
    console.log(this.numbers)
    console.log(this.texto)
  }
}
```

// ---  views/home.component.html

```html
<mat-card class="home mat-elevation-z3">
    <mat-card-title class="title">Bem Vindo!</mat-card-title>
    <mat-card-subtitle class="subtitle">
        Sistema para exemplificar a construção de um cadastro em Angular.
    </mat-card-subtitle>
    <p>Diretiva estrutural customizada</p>
    <ul>
        <li *myFor="let n em [1, 2, 3] usando 'oieee'">{{ n }}</li>
    </ul>
</mat-card>
```

