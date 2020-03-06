import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.RetriveGameNavDesc();
  }

  data: any;

  gameTitle: string;
  description: string;
  imgDescription: string;

  ac3ImgNavDesc: string;
  ac3NavDesc: string;
  
  fc3ImgNavDesc: string;
  fc3NavDesc: string;

  RetriveGameNavDesc()
  {
    this.http.get("https://localhost:5001/api/games/").subscribe(response =>
    {
      this.data = response;

      this.data.forEach(x => {
        switch(x.short_title)
        {
          case "ACIII":
            this.ac3NavDesc = x.description;
            this.ac3ImgNavDesc = x.description_img_path;
            break;

          case "FC3":
            this.fc3NavDesc = x.description;
            this.fc3ImgNavDesc = x.description_img_path;
            break;
        }
      });
    })
  }

  ShowDescription(game:any)
  {
    switch(game)
    {
      case "ACIII":
        this.description = this.ac3NavDesc;
        this.imgDescription = this.ac3ImgNavDesc;
        break;

      case "FC3":
        this.description = this.fc3NavDesc;
        this.imgDescription = this.fc3ImgNavDesc;
        break;

      // case "c":
      //   this.showDesc = this.c;
      //   break;
    }
    $("#imgDesc").css("background","url("+this.imgDescription+")");
    $("#imgDesc").css("background-position", "center");
    $("#imgDesc").css("background-size", "cover");
  }


  ShowSpecificCategoryElements()
  {
    $("#category_elements_description").animate({ height: 160});
    $("#elements_list").animate({ height: "88%"});
    $("#elements_description").fadeIn(300);
    $("#collapse").animate({ height: "12%"});
  }

  HideSpecificCategoryElements()
  {
    $("#category_elements_description").animate({ height: 0});
    $("#elements_list").animate({ height: "0%"});
    $("#elements_description").fadeOut(300);
    $("#collapse").animate({ height: "0%"});
  }
}
