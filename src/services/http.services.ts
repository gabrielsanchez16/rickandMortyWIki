import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServices {
  private baseUrl = 'https://rickandmortyapi.com/api/character';
  private characters: any[] = [];
  private nextPage: string | null = null;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

 
}