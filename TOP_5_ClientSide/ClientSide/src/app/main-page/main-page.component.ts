import { Component, OnInit, Injectable } from '@angular/core';
import { GameService } from '../gameCategory/service/Game.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit 
{
  constructor(private service: GameService) { }

  activeCategoryList: Array <boolean> = [true,false,false,false,false];
 

  SetCategory(categoryName: string)
  {
    this.service.SetCategory(categoryName);
  }

  ngOnInit() 
  {
    this.fadeOutAllCategoryContents();
    this.welcome();
  }

  welcome()
  {
    $('#welcomeAnimation').delay(800).animate({top: '-100%'}, 1200);
  }

  fadeOutAllCategoryContents()
  {
    $('#filmsContent').fadeOut(0);
    $('#actorsContent').fadeOut(0);
    $('#singersContent').fadeOut(0);
    $('#ytContent').fadeOut(0);
  }

  setActiveCategory(active: number, categoryName: string)
  { 

    if(this.activeCategoryList[active] == false)
    {
      this.activeCategoryList[active] = true;
      $(categoryName).fadeIn(1500);
    }
    
    for(let i=0; i<5; i++)
    {
      if(i == active)
      {
        continue;
      }  

      if(this.activeCategoryList[i] == true && i != active)
      {
        switch(i)
        {
          case 0:
              $('#gamesContent').fadeOut(500);
          break;

          case 1:
              $('#filmsContent').fadeOut(500);
          break;

          case 2:
              $('#actorsContent').fadeOut(500);
          break;

          case 3:
            $('#singersContent').fadeOut(500);
          break;

          case 4:
            $('#ytContent').fadeOut(500);
          break;
        }
      }
      this.activeCategoryList[i] = false
    }
  }
}
