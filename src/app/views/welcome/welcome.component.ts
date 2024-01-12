import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  
  nombre: string = ''; // Inicializa la propiedad aquí o en el ngOnInit

  constructor() { }

  ngOnInit(): void {
    // Puedes inicializar la propiedad nombre aquí si es necesario
  }

  getSession(event: Event): void {
    event.preventDefault();
    console.log("Bienvenido " + this.nombre);
  }

}
