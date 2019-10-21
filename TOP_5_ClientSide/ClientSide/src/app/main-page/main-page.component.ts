import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Http.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private http: HttpService) { }
  
  result: Object;
  activeGame: boolean = true;

  ngOnInit() 
  {
    this.http.getValues().subscribe(data => 
      {
        this.result = data; 
        console.log(this.result); 
      });
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

  //TODO: dodanie funkcji ktora iteruje po tablicy kategorii - funkcja z parametrem zmiennej 
  //      div'a w ktorym jest wywplywana
}
