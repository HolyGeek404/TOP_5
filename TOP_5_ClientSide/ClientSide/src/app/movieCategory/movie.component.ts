import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private http: HttpClient) 
  {
    this.title =  ""
    this.description = ""
  }

  ngOnInit() {
    this.RetriveMovieData();
  }

  data: any | undefined;

  title: string;
  description: string;

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

  RetriveMovieData()
  {
    var splitedLocation = window.location.href.split("/");
    
    this.title = splitedLocation[splitedLocation.length-1];
    
    this.http.get('https://localhost:5001/api/movie/'+this.title).subscribe(response => 
    { this.data = response; 
      
      this.data.forEach(((x: { background_img_path: any; description_img_path: any; title: string; description: string; }) => 
      {
        this.SetImg(x.background_img_path,x.description_img_path);
        this.title = x.title;
        this.description = x.description;
      }))
    })
  }  
}
