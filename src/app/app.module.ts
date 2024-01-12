import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HttpServices } from 'src/services/http.services';


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
  
  ],
  providers: [HttpServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
