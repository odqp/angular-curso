import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  
  public heroes: string[] = ["Spiderman", "Ironman", "Thor", "Capitan America"];
  public borrado:string = "";

  public esBorrado(): boolean{
    if(this.borrado !== "")
      return true;
    return false;
  }
  
  public borrarHeroe():void{
    this.borrado = this.heroes.shift() || "";
  }
}
