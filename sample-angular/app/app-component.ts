import{ Component } from 'angular2/core'
import{ Client } from './client'

@Component(
  {
    selector: "my-app",
    template: `
      <h1>Bem Vindo ao Mundo Angular 2 e Typescript</h1>
      <h2>{{ title }}</h2>
      <p>Selected Client: {{ client.name }}</p>
      <ul>
        <li *ngFor="#client of clients; #i = index" >{{ client.name }}</li>
      </ul>
    `
  }
)
export class AppCompnent {
  public title:string;
  public client:Client;
  public clients:Client[];

  constructor() {
    this.title = "Listing of Clients"

    this.clients = [
      new Client( 1, "Carla" ),
      new Client( 2, "Mário" ),
      new Client( 3, "Enya" ),
      new Client( 4, "Rodrigo" )
    ]

    this.client = this.clients[ 0 ];
  }
}
