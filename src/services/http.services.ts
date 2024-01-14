import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServices {
  private globalUrl = 'https://rickandmortyapi.com/api/character';
  private characters: any[] = [];
  private detailUrl = "https://rickandmortyapi.com/api/character/"
  private nextPage: string | null = null;

  constructor(private http: HttpClient) {}

  getCharacters(url:string): Observable<any> {
    return this.http.get(url);
  }

  getCharacter(id:number): Observable<any>{
    const urlD = this.detailUrl + id;
    return this.http.get(urlD)
  }

  getEpisode(url:string):Observable<any>{
    return this.http.get(url)
  }

  

}