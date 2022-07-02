import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponet } from './heroes/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponet,
        ListadoComponent
    ],
    imports: [ CommonModule ],
    exports: [
        HeroeComponet,
        ListadoComponent
    ],
    providers: [],
})
export class HeroesModule {}