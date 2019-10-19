import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { MainPageComponent } from './main-page/main-page.component';
import { fromEventPattern } from 'rxjs';

@NgModule({
   declarations: [
      NavComponent,
      MainPageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      MainPageComponent
   ]
})
export class AppModule { }
