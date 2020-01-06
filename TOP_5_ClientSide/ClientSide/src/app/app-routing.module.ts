import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './gameCategory/game/game.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  { path: '', component:MainPageComponent },
  { path: 'game/ACIII', component:GameComponent },
  { path: 'game/FC3', component:GameComponent },
  { path: 'game/GTAIV', component:GameComponent },
  { path: 'game/Skyrim', component:GameComponent },
  { path: 'game/Gears-of-War', component:GameComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
