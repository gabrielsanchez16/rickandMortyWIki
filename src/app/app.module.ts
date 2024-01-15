import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule,packRoutingUse } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HttpServices } from 'src/app/services/http.services';
import { FormsModule } from '@angular/forms';
import { EpisodeComponent } from './episode/episode.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    PaginationComponent,
    packRoutingUse,
    EpisodeComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [HttpServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
