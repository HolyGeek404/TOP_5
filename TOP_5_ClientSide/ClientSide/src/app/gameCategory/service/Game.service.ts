import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../../Http.service';

@Injectable({
  providedIn: 'root'
})
export class GameService 
{
  constructor(  private httpService: HttpService ) { }

  categoryName: string;

  ReturnCategoryName()
  {
    var x = window.location.href.split("/");
    this.categoryName = x[x.length-1];
    
    return this.httpService.getValues(this.categoryName);
  }
}
