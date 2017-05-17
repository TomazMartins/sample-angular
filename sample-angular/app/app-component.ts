import{ Component } from 'angular2/core'

@Component(
  {
    selector: "my-app",
    template: `
      <h1>Bem Vindo ao Mundo Angular 2 e Typescript</h1>
      <h2>Listagem de Tarefas</h2>
      <ul>
        <li *ngFor="#task of tasks; #i = index" >
          {{ task }} <a href="#" (click)="removeTask( i )">[ X ]</a>
        </li>
      </ul>
      <input type="text" placeholder="Digit your task here..." [(ngModel)]="task" />
      <button (click)="addTask()">Add Task</button>
    `
  }
)
export class AppCompnent {
  public tasks:string[] = [];
  public task:string;

  addTask() {
    if( this.task != "" ) {
      this.tasks.push( this.task );
      this.task = "";
    }
  }

  removeTask( index:number ) {
    this.tasks.splice( index, 1 );
  }
}
