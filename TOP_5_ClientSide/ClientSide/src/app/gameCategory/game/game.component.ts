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
  description: string;

  ac3ImgNavDesc: string;
  ac3NavDesc: string;
  
  fc3ImgNavDesc: string;
  fc3NavDesc: string;

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
        this.SetImg(x.background_img_path,x.description_img_path);
        this.gameTitle = x.title;
        this.description = x.description;
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

  SetImg(mainBgPath: any, descriptionImgPath: any)
  {
    // main bg
    $("#title_block").css("background","url("+mainBgPath+")");
    $("#title_block").css("background-attachment", "fixed");
    $("#title_block").css("background-position", "center");
    $("#title_block").css("background-size", "cover");

    //description img
    $("#img").css("background","url("+descriptionImgPath+")");
    $("#img").css("background-position", "center");
    $("#img").css("background-size", "cover");
  }
}
