import  {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})
export class ContadorComponent {
    public titulo: string = 'Contador App';
    public numero: number = 0;
    public base: number = 5;
  
    public acumular(valor : number) : void
    {
      this.numero+= valor;
    }
}