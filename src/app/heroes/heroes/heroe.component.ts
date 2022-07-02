import { Component } from "@angular/core";

@Component({
   selector: 'app-heroe',
   templateUrl: "./heroe.component.html"
})
export class HeroeComponet {
    public nombre: string = "Ironman";
    public edad: number = 45;


    public get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }


    public obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    public cambiarNombre(): void{
        this.nombre = "spiderman";
    }

    public cambiarEdad(): void{
        this.edad = 30;
    }
}