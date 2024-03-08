import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LiquidezComponent } from './pages/liquidez/liquidez.component';
import { SolvenciaComponent } from './pages/solvencia/solvencia.component';
import { RentabilidadComponent } from './pages/rentabilidad/rentabilidad.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { InformeComponent } from './pages/informe/informe.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { GraficaActivosComponent } from 'src/app/components/grafica-activos/grafica-activos.component';
import { GraficaLinearComponent } from 'src/app/components/grafica-linear/grafica-linear.component';
import { GraficaLiquidezComponent } from 'src/app/components/grafica-liquidez/grafica-liquidez.component';
import { GraficaPasivosComponent } from 'src/app/components/grafica-pasivos/grafica-pasivos.component';
import { GraficaRentabilidadComponent } from 'src/app/components/grafica-rentabilidad/grafica-rentabilidad.component';
import { GraficaSolvenciaComponent } from 'src/app/components/grafica-solvencia/grafica-solvencia.component';

@NgModule({
  declarations: [
    SolvenciaComponent,
    LiquidezComponent,
    RentabilidadComponent,
    GestionComponent,
    InformeComponent,
    HomeComponent,
    HomePagesComponent,
    GraficaLinearComponent,
    GraficaLiquidezComponent,
    GraficaSolvenciaComponent,
    GraficaRentabilidadComponent,
    GraficaActivosComponent,
    GraficaPasivosComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class HomeModule { }
