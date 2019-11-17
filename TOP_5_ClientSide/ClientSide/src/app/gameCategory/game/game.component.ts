import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/Game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit 
{
  constructor(private service: GameService){}

  message: string;

  ngOnInit() 
  {
    this.message = this.service.ReturnCategoryName();
  }
}
