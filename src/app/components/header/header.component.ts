import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  hid:string;
  logo:string = 'COLOQUIO';
  navItemsPart1:String[] = ['Inicio', 'Nosotros', 'Menú'];
  navItemsPart2:String[] = ['Reservas', 'Galeria', 'Contacto'];
  
  constructor() { }
  
  ngOnInit()
  {
  }

  ocultar() 
  {
    let set = document.getElementById('logo_txt');
    if (!set.classList.item(3)){
      set.classList.add('d-none');
    }
    else
    {
      set.classList.remove('d-none');
    }
  }

}
