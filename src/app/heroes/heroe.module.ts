import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  exports: [
    HeroComponent,
    ListComponent,
  ],
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
  ]


})
export class HeroesModule {

}

// Nota importante, cuando estamos trabajando con modulos encasulados o en en nuestros propios paquetes.
// Necesitamos importar los CommonModules que son los que nos permiten trabajar con ngIf, ngFor y ngSwith
