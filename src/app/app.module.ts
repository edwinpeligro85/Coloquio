import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminModule } from './modules/admin/admin.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/Inicio.Component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { MenuComponent } from './components/menu/menu.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { AppRoutingModule } from './app-routing.module';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    MenuComponent,
    PrincipalComponent,
    ReservasComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule,
    Angular2ImageGalleryModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
