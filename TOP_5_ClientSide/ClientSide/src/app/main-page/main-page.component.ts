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

  ngOnInit() 
  {
    this.http.getValues().subscribe(data => 
      {
        this.result = data; 
        console.log(this.result); 
      });
  }

}
