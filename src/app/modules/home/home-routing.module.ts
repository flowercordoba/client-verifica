import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LiquidezComponent } from './pages/liquidez/liquidez.component';
import { SolvenciaComponent } from './pages/solvencia/solvencia.component';
import { RentabilidadComponent } from './pages/rentabilidad/rentabilidad.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { InformeComponent } from './pages/informe/informe.component';
// 

const routes: Routes = [
  {path:'',component:HomeComponent,
children:[
  {path:'liquidez',component:LiquidezComponent},
  {path:'solvencia',component:SolvenciaComponent},
  {path:'rentabilidad',component:RentabilidadComponent},
  {path:'gestion',component:GestionComponent},
  {path:'informe',component:InformeComponent},
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
