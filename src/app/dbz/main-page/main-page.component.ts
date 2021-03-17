import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbs.interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: '321',
    poder: 123
  }

  agregarNuevoPersonaje( pPersonaje: Personaje ) {
    console.log('Main Page Component');
    console.log(pPersonaje);
    this.personajes.push(pPersonaje);
  }

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService) {
  }

  
} 
