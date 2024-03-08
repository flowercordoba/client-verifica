import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TerminosCondicionesComponent } from './pages/terminos-condiciones/terminos-condiciones.component';
import { PoliticaTratamientoDatoComponent } from './pages/politica-tratamiento-dato/politica-tratamiento-dato.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    TerminosCondicionesComponent,
    PoliticaTratamientoDatoComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule,
    
  ],
  exports:[
    LogoutComponent,
  ]
})
export class AuthModule { }
