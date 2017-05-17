import{ Component } from 'angular2/core'
import{ Client } from './client'
import { CepPipe } from './cep-pipe'

@Component(
  {
    selector: "my-app",
    template: `
      <h1>Bem Vindo ao Mundo Angular 2 e Typescript</h1>
      <h2>{{ title }}</h2>
      <p>Selected Client: {{ client.name }}</p>

      <div *ngFor="#client of clients" >
        {{ client.id }}
        {{ client.name }}
        {{ client.birthday | date:'dd/MM/yyyy' }}
        {{ client.cep | cep }}
      </div>
    `,
    pipes: [CepPipe]
  }
)
export class AppCompnent {
  public title:string;
  public client:Client;
  public clients:Client[];

  constructor() {
    this.title = "Listing of Clients"

    this.clients = [
      new Client( 1, "Carla", new Date( 647751600000 ), "12345678" ),
      new Client( 2, "Mário", new Date( 697690800000 ), "12345678" ),
      new Client( 3, "Enya", new Date( 697690800000), "12345678" ),
      new Client( 4, "Rodrigo", new Date( 666759600000 ), "12345678" ),
    ]

    this.client = this.clients[ 0 ];
  }
}
