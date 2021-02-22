import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './gameCategory/game.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieComponent } from './movieCategory/movie.component';


const routes: Routes = [
  { path: '', component:MainPageComponent },
  { path: 'games/Assassin\'s Creed III', component:GameComponent },
  { path: 'games/Far Cry 3', component:GameComponent },
  { path: 'games/Grand Theft Auto IV', component:GameComponent },
  { path: 'games/Dark Souls 2', component:GameComponent },
  { path: 'games/Gears of War', component:GameComponent },

  { path: 'movies/End of Watch', component:MovieComponent },
  { path: 'movies/A Beautiful Day in the Neighborhood', component:MovieComponent },
  { path: 'movies/Logan: Wolverine', component:MovieComponent },
  { path: 'movies/Paranormal Activity', component:MovieComponent },
  { path: 'movies/Avengers: Endgame', component:MovieComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
