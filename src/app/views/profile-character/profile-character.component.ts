import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServices } from 'src/app/services/http.services';
import { Location } from '@angular/common';


@Component({
  selector: 'app-profile-character',
  templateUrl: './profile-character.component.html',
  styleUrls: ['./profile-character.component.css']
})
export class ProfileCharacterComponent implements OnInit {

  datos : any
  id: number = 0
  chargePage : boolean = false;

  constructor(
    private httpServices: HttpServices,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.httpServices.getCharacter(this.id).subscribe((data) => {
      this.datos = data;
      setTimeout(() => {
        this.chargePage = true
      }, 1000);
  })
}

circlechange: { [key: string]: string } = {
  Alive: 'rgb(24, 159, 24)',
  Dead: 'red',
  unknown: 'purple',
};

volverAtras(): void {
  this.location.back();
}



}
