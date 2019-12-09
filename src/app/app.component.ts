import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'Coloquio';
  accion = false;
  rutaAdmin = false;

  constructor( private location: Location ) {
    if ( location.path() === '/tablero') {
      this.rutaAdmin = true;
    }
  }
}
