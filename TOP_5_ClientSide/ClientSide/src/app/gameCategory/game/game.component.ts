import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit 
{
  constructor(private http: HttpClient){}

  data: any;
  gameTitle: string;
  a: string;

  ngOnInit() 
  {
    this.RetriveGameData();
  }

  RetriveGameData()
  {
    var splitedLocation = window.location.href.split("/");
    this.gameTitle = splitedLocation[splitedLocation.length-1];

    this.http.get('https://localhost:5001/api/games/'+this.gameTitle).subscribe(response => 
    { this.data = response; 
      
      this.data.forEach(x => {
        this.SetMainBackgroundImg(x.background_img_path);
      });
      
    })
  }

  Scroll()
  {
    $('html, body').animate
    ({
      scrollTop: $("#title_game").offset().top
     }, 1000);
    
     $("#scroll_down").fadeOut();
  }

  SetMainBackgroundImg(x: any)
  {
    $("#title_block").css("background","url("+x+")");
    $("#title_block").css(" background-attachment", "fixed");
    $("#title_block").css("background-position", "center");
    $("#title_block").css("background-size", "cover");
  }
}
