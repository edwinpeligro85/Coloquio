import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  constructor() { }

  slides = [
    {img: 'assets/img/diapositiva1.JPG'},
    {img: 'assets/img/diapositiva2.JPG'},
    {img: 'assets/img/diapositiva3.jpg'}
  ];

  ngOnInit() {
  }

}
