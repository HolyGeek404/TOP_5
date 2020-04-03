import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GameComponent } from './gameCategory/game.component';
import { XdComponent } from './xd/xd.component';
import { MovieComponent } from './movieCategory/movie.component';

@NgModule({
   declarations: [
      NavComponent,
      MainPageComponent,
      GameComponent,
      XdComponent,
      MovieComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      XdComponent
   ]
})
export class AppModule { }
