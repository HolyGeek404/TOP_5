import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Http.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit 
{
  result: Object;
  activeCategoryList: Array <boolean> = [true,false,false,false,false];
  wasActived: any;

  constructor(private http: HttpService) { }

  ngOnInit() 
  {
    this.fadeOutAllCategoryContents();
    this.welcome();
  }

  welcome()
  {
    $('#welcomeAnimation').delay(1000).animate({top: '-100%'}, 1200);
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

  randomColor()
  {
    var length = 6;
    var chars = '0123456789ABCDEF';
    var hex = '#';

    while(length--)
    {
      hex += chars[(Math.random() * 16) | 0];
    }

    return hex;
  }
}
