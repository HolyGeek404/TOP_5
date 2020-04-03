import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './gameCategory/game.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieComponent } from './movieCategory/movie.component';


const routes: Routes = [
  { path: '', component:MainPageComponent },
  { path: 'games/ACIII', component:GameComponent },
  { path: 'games/FC3', component:GameComponent },
  { path: 'games/GTAIV', component:GameComponent },
  { path: 'games/DS2', component:GameComponent },
  { path: 'games/GOW', component:GameComponent },

  { path: 'movies/End-of-Watch', component:MovieComponent },
  { path: 'movies/A-Beautiful-Day-in-the-Neighborhood', component:MovieComponent },
  { path: 'movies/Logan:-Wolverine', component:MovieComponent },
  { path: 'movies/Paranormal-Activity', component:MovieComponent },
  { path: 'movies/Avengers:-Endgame', component:MovieComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
