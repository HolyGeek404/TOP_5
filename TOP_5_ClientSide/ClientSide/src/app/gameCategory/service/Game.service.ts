import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../../Http.service';

@Injectable({
  providedIn: 'root'
})
export class GameService 
{
  constructor(  private httpService: HttpService ) { }

  private category = new BehaviorSubject<string>("");
  currentCategory = this.category.asObservable();
  categoryName: string;

  SetCategory(message: string)
  {
    this.category.next(message);
  }

  ReturnCategoryName()
  {
    this.currentCategory.subscribe(message => this.categoryName = message);
    
    if(!this.categoryName)
    {
      var x = window.location.href.split("/");
      this.categoryName = x[x.length-1];
      alert(this.category)
    }
    return this.httpService.getValues(this.categoryName);
  }
}
