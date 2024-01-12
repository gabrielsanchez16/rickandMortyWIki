import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { HttpServices } from 'src/services/http.services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  datos:any[] = [];


  constructor(private httpServices : HttpServices) {}

  

  reproducirMusica(): void {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    audioElement.play();
  }

  ngOnInit(): void {
    this.httpServices.getCharacters().subscribe((data) => {
      this.datos = data.results;
      console.log(data.results)
    });
  }



}
