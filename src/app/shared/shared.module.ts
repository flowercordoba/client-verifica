import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { RouterModule } from '@angular/router';
import { Page404Component } from './page-404/page-404.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    HeroComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    HeroComponent,
    Page404Component
  ]
})
export class SharedModule { }
