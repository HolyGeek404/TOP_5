import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit 
{
  constructor(private http: HttpClient)
  {
    this.title = ""
    this.description = ""
  }

  data: any;

  title: string;
  description: string;

  ngOnInit() 
  {
    this.RetriveGameData();
  }
  
  RetriveGameData()
  {
    var splitedLocation = window.location.href.split("/");
    
    this.title = splitedLocation[splitedLocation.length-2]+"/"+splitedLocation[splitedLocation.length-1];
    
    this.http.get('https://localhost:5001/api/'+this.title).subscribe(response => 
    { this.data = response; 
      
      this.data.forEach((x: { background_img_path: any; description_img_path: any; title: string; description: string; }) => {
        this.SetImg(x.background_img_path,x.description_img_path);
        this.title = x.title;
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
