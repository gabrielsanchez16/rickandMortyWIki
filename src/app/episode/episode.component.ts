import { Component, OnInit,Input } from '@angular/core';
import { HttpServices } from 'src/app/services/http.services';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  datos:any
  chargePage:boolean=false

  @Input() url: any; 
  constructor(private httpServices: HttpServices) { }

  ngOnInit(): void {
    this.httpServices.getEpisode(this.url).subscribe((data) => {
      this.datos = data;
      setTimeout(() => {
        this.chargePage = true
      }, 2000);

  })}

}
