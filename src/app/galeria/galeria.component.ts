import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  imagenes = [
    {
      "preview_xxs": {
        "path": "assets/img/galeria1.JPG",
        "width": 500,
        "height": 375
      },
      "preview_xs": {
        "path": "assets/img/galeria1.JPG",
        "width": 1024,
        "height": 768
      },
      "preview_s": {
        "path": "assets/img/galeria1.JPG",
        "width": 1440,
        "height": 1080
      },
      "preview_m": {
        "path": "assets/img/galeria1.JPG",
        "width": 2133,
        "height": 1600
      },
      "preview_l": {
        "path": "assets/img/galeria1.JPG",
        "width": 2880,
        "height": 2160
      },
      "preview_xl": {
        "path": "assets/img/galeria1.JPG",
        "width": 3840,
        "height": 2880
      },
      "raw": {
        "path": "assets/img/galeria1.JPG",
        "width": 1400,
        "height": 1050
      },
      "dominantColor": "#a6a6a6"
    }
  ]

  yourNotificationFunction( e ) {
    console.log(e);
  }

  ngOnInit() {
  }

}
