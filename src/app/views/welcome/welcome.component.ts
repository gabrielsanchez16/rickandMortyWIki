import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

  
  nombre: string = ''; // Inicializa la propiedad aquí o en el ngOnInit
  err : boolean = false

  constructor(private router: Router) { }


  getSession(): void {
    if(this.nombre === ""){
      this.err = true
      setTimeout(() => {
        this.err = false
      }, 2000);
    }else{
      console.log("Bienvenido " + this.nombre);
    this.router.navigate(["/home"],{queryParams:{"nombre":this.nombre}}) 
    
  }

}
}
