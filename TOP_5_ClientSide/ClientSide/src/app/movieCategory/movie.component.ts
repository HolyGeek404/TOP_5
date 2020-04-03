import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
//
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  data: any;

  title: string;
  description: string;

  RetriveGameData()
  {
    var splitedLocation = window.location.href.split("/");
    
    this.title = splitedLocation[splitedLocation.length-2]+"/"+splitedLocation[splitedLocation.length-1];
    
    this.http.get('https://localhost:5001/api/'+this.title).subscribe(response => 
    { this.data = response; 
      
      this.data.forEach(x => {
        this.SetImg(x.background_img_path,x.description_img_path);
        this.title = x.title;
        this.description = x.description;
      });
    })
  }

}
