import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['SpiderMan','IronMan','Hulk', 'Capitan America'];
  borrados: string[] =[];
 
  borrarHeroe(): void{
    if (this.heroes.length >0 )
    {
      this.borrados.unshift(this.heroes.shift()||'');
    }
  }
}
