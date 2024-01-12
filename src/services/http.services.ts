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
    const url = this.nextPage || `${this.baseUrl}`;
    return this.http.get(url);
  }

  getNextPage(): Observable<any> {
    if (this.nextPage) {
      return this.http.get(this.nextPage);
    } else {
      return this.getCharacters();
    }
  }

  getPrevPage(): void {
    // Implementar lógica para ir a la página anterior
    // Puedes mantener un registro de las páginas visitadas y retroceder en consecuencia.
    // Aquí, simplemente limpio el array de personajes y hago una nueva solicitud a la primera página.
    this.characters = [];
    this.nextPage = null;
    this.getCharacters().subscribe((data) => this.handleCharacterResponse(data));
  }

  private handleCharacterResponse(data: any): void {
    this.characters = this.characters.concat(data.results);
    this.nextPage = data.info.next;
  }

  getCharacterArray(): any[] {
    return this.characters;
  }
}