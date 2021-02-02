import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private http:HttpClient) {}

  ngOnInit()
  { 
    this.storage = localStorage;
  }
  
  storage: any;
  data: any;

  RetriveGameNavDesc()
  {
    this.http.get("https://localhost:5001/api/games/").subscribe(response =>
    {
      this.data = response;

      this.data.forEach((x: { short_title: any; description: any; description_img_path: any; }) => {
        switch(x.short_title)
        {
          case "ACIII":
           this.storage.setItem("ACIII_NavDesc", x.description);
           this.storage.setItem("ACIII_NavImgPath", x.description_img_path);
            break;

          case "FC3":
           this.storage.setItem("FC3_NavDesc", x.description);
           this.storage.setItem("FC3_NavImgPath", x.description_img_path);
            break;

          case "GTAIV":
           this.storage.setItem("GTAIV_NavDesc", x.description);
           this.storage.setItem("GTAIV_NavImgPath", x.description_img_path);
            break;

          case "DS2":
           this.storage.setItem("DS2_NavDesc", x.description);
           this.storage.setItem("DS2_NavImgPath", x.description_img_path);
            break;

          case "GOW":
           this.storage.setItem("GOW_NavDesc", x.description);
           this.storage.setItem("GOW_NavImgPath", x.description_img_path);
            break;
        }
      });

      $('#navDescList').empty();
      this.CreateGameCategoryListDescription(response,"games"); 
      
    })

    this.ShowSpecificCategoryElements();
  }

  RetriveMovieNavDesc()
  {
    this.http.get("https://localhost:5001/api/movies/").subscribe(response =>
    {
      this.data = response;

      this.data.forEach((x: { title: any; description: any; description_img_path: any; }) => {
        switch(x.title)
        {
          case "End-of-Watch":
           this.storage.setItem("End-of-Watch_NavDesc", x.description);
           this.storage.setItem("End-of-Watch_NavImgPath", x.description_img_path);
            break;

          case "A-Beautiful-Day-in-the-Neighborhood":
           this.storage.setItem("A-Beautiful-Day-in-the-Neighborhood_NavDesc", x.description);
           this.storage.setItem("A-Beautiful-Day-in-the-Neighborhood_NavImgPath", x.description_img_path);
            break;

          case "Logan:-Wolverine":
           this.storage.setItem("Logan:-Wolverine_NavDesc", x.description);
           this.storage.setItem("Logan:-Wolverine_NavImgPath", x.description_img_path);
            break;

          case "Paranormal-Activity":
           this.storage.setItem("Paranormal-Activity_NavDesc", x.description);
           this.storage.setItem("Paranormal-Activity_NavImgPath", x.description_img_path);
            break;

          case "Avengers:-Endgame":
           this.storage.setItem("Avengers:-Endgame_NavDesc", x.description);
           this.storage.setItem("Avengers:-Endgame_NavImgPath", x.description_img_path);
            break;
        }
      });

      $('#navDescList').empty();
      this.CreateMovieCategoryListDescription(response,"movies"); 
      
    })

    this.ShowSpecificCategoryElements();
  }

  CreateGameCategoryListDescription(data: any, category:string)
  {
    data.forEach((x: { short_title: string; title: string; }) => {
      var z = "'"+x.short_title+"'";
      $("#navDescList").append(
        '<a onmouseover="a'+'('+z+')'+'" routerlink="/'+category+'/'+x.short_title+'" href="/'+category+'/'+x.short_title+'"><li>'+x.title+'</li></a>');
    });
  }
  CreateMovieCategoryListDescription(data: any, category:string)
  {
    data.forEach((x: { title: string; }) => {
      var z = "'"+x.title+"'";

      $("#navDescList").append(
        '<a onmouseover="a'+'('+z+')'+'" routerlink="/'+category+'/'+x.title+'" href="/'+category+'/'+x.title+'"><li>'+x.title.replace(/-/g, " ")+'</li></a>');
    });
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