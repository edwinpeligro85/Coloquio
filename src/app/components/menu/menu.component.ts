import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  cards = [
    {name: 'chocolate', img: 'assets/img/CHOCOLATE.jpg'},
    {name: 'rojo', img: 'assets/img/ROJO.jpg'},
    {name: 'amarillo', img: 'assets/img/AMARILLO.jpg'}
  ];

  ngOnInit() {
  }

}
