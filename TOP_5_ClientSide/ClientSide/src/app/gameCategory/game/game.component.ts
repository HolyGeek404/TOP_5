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
  x: string = "https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2016/12/assassins-creed-III-uplay-ubi30.jpg";

  ngOnInit() 
  {
    var splitedLocation = window.location.href.split("/");
    this.gameTitle = splitedLocation[splitedLocation.length-1];

    this.http.get('https://localhost:5001/api/games/'+this.gameTitle).subscribe(response => 
    { this.data = response; })
    $("#title_block").css("background","url("+this.x+")");
    $("#title_block").css(" background-attachment", "fixed");
    $("#title_block").css("background-position", "center");
    $("#title_block").css("background-size", "cover");

  }

  Scroll()
  {
    $('html, body').animate
    ({
      scrollTop: $("#title_game").offset().top
     }, 1000);
    
     $("#scroll_down").fadeOut();
  }
}
