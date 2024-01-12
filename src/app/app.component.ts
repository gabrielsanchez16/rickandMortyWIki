import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpServices } from 'src/services/http.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RickAndMortyWiki';

  datos: any[]=[];

  constructor(private httpServices : HttpServices) {}

  ngOnInit(): void {
    this.httpServices.getCharacters().subscribe((data) => {
      this.datos = data.results;
    });
  }

  getNextPage(): void {
    this.httpServices.getNextPage().subscribe((data) => {
      this.datos = data.results;
    });
  }

  getPrevPage(): void {
    this.httpServices.getPrevPage();
    this.datos = this.httpServices.getCharacterArray();
  }
  
}
