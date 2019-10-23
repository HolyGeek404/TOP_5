import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Http.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  constructor(private http: HttpService) { }
  ngOnInit() 
  {
    this.http.getValues().subscribe(data => 
      {
        this.result = data; 
        console.log(this.result); 
      });
  }

  result: Object;

  categoryList: Array <boolean> =
  [
    true,
    false,
    false,
    false,
    false
  ];

  
  a(a)
  {   
      switch(a)
      {
        case 1:
          $(".categoryContent").fadeOut(200);
        break;
        case 2:
          $(".categoryContent").delay(1000).fadeIn(500);
        break;
      }
      // $(".categoryContent").css("display", "none");
      
      // $(".category").fadeIn();  
  }

  setActiveCategory(active: number)
  { 
    for(let i=0; i<5; i++)
    {
      if(i == active)
      {
        this.categoryList[i] = true; 
        continue;
      }
      this.categoryList[i] = false;
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
