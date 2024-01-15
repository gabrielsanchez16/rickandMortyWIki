import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServices } from 'src/app/services/http.services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chargePage: boolean = false;
  patrocinadores: any[] = [];
  paginaActual = 1;
  keyword = "";
  validateForm = false;
  numeroDePaginas = 1;
  elementosPorPagina = 20;
  urlPaginaAnterior = '';
  urlPaginaSiguiente = '';
  name = "";
  urlMale = "https://rickandmortyapi.com/api/character/?page=1&gender=male";
  urlFemale = "https://rickandmortyapi.com/api/character/?page=1&gender=female";

  constructor(
    private httpServices: HttpServices,
    private router: Router,
    private route: ActivatedRoute
  ) { }








  ngOnInit() {
    this.cargarPatrocinadores('https://rickandmortyapi.com/api/character');
    this.name = this.route.snapshot.queryParams['nombre']
    if(this.name == null){
      this.router.navigate(["/"])
    }
  }




  cargarPatrocinadores(url: string) {
    this.chargePage = false
    this.httpServices.getCharacters(url).subscribe((data) => {
      this.patrocinadores = data.results;
      setTimeout(() => {
        this.chargePage = true
      }, 1000);
      this.numeroDePaginas = Math.ceil(data.info.count / 20);
      console.log(data.info)
      this.urlPaginaAnterior = data.info.prev;
      this.urlPaginaSiguiente = data.info.next;
    });
  }

  paginaAnterior() {
    if (this.urlPaginaAnterior) {
      this.paginaActual--;
      this.cargarPatrocinadores(this.urlPaginaAnterior);
    }
  }

  paginaSiguiente() {
    if (this.urlPaginaSiguiente) {
      this.paginaActual++;
      this.cargarPatrocinadores(this.urlPaginaSiguiente);
    }
  }

  filterCharacterByGender(gender: string) {
    this.paginaActual = 1
    if (gender === "m") {
      this.chargePage = false
      this.httpServices.getCharacters(this.urlMale).subscribe((data) => {
        this.patrocinadores = data.results;
        setTimeout(() => {
          this.chargePage = true
        }, 1000);
        this.numeroDePaginas = Math.ceil(data.info.count / 20);
        console.log(data.info)
        this.urlPaginaAnterior = data.info.prev;
        this.urlPaginaSiguiente = data.info.next;
      });
    } else {
      this.paginaActual = 1
      this.chargePage = false
      this.httpServices.getCharacters(this.urlFemale).subscribe((data) => {
        this.patrocinadores = data.results;
        setTimeout(() => {
          this.chargePage = true
        }, 1000);
        this.numeroDePaginas = Math.ceil(data.info.count / 20);
        console.log(data.info)
        this.urlPaginaAnterior = data.info.prev;
        this.urlPaginaSiguiente = data.info.next;
      });
    }
  }

  filterCharacterByName(){
    if(this.keyword === ""){
      this.validateForm = true
      setTimeout(() => {
        this.validateForm = false
      }, 2000);
    }else{
      this.chargePage = false
      this.httpServices.getCharacters(`https://rickandmortyapi.com/api/character/?name=${this.keyword}`).subscribe((data) => {
        this.patrocinadores = data.results;
        setTimeout(() => {
          this.chargePage = true
        }, 5000);
        this.numeroDePaginas = Math.ceil(data.info.count / 20);
        console.log(data.info)
        this.urlPaginaAnterior = data.info.prev;
        this.urlPaginaSiguiente = data.info.next;
      });
    }
  }

}
