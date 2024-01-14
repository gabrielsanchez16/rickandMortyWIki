import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpServices } from 'src/services/http.services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  chargePage: boolean = false;
  patrocinadores: any[] = [];
  paginaActual = 1;
  numeroDePaginas = 1;
  elementosPorPagina = 20;
  urlPaginaAnterior = '';
  urlPaginaSiguiente = '';

  constructor(private httpServices: HttpServices) { }



  reproducirMusica(): void {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    audioElement.play();
  }

 


  ngOnInit() {
    this.cargarPatrocinadores('https://rickandmortyapi.com/api/character');
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

 

}
