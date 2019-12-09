import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AdministradorComponent,
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    ContentComponent
  ],
  exports: [
    AdministradorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
