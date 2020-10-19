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

/* Em views/home.component.html inserimos a diretiva "myFor"

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
*/