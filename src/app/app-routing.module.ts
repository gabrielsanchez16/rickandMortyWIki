import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProfileCharacterComponent } from './views/profile-character/profile-character.component';
import { WelcomeComponent } from './views/welcome/welcome.component';

const routes: Routes = [
  {path:'', redirectTo:'home' ,pathMatch:'full'},
  {path:'welcome', component:WelcomeComponent},
  {path:'home', component:HomeComponent},
  {path:'profileCharacter', component:ProfileCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const packRoutingUse = [
  WelcomeComponent,
  HomeComponent,
  ProfileCharacterComponent
]
