import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit()
  { 
    this.storage = localStorage;
  }
  
  storage: any;
  data: any;

  gameTitle: string;
  description: string;
  imgDescription: string;

  RetriveGameNavDesc()
  {
    this.http.get("https://localhost:5001/api/games/").subscribe(response =>
    {
      this.data = response;

      this.data.forEach(x => {
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

      if($('#navDescList').children().length <= 0 ) 
      {
        this.CreateCategoryListDescription(response,"game"); 
      }
    })

    this.ShowSpecificCategoryElements();
  }

  CreateCategoryListDescription(data: any, category:string)
  {
    data.forEach(x => {
      var z = "'"+x.short_title+"'";
      $("#navDescList").append(
        '<a onmouseover="a'+'('+z+')'+'" routerlink="/'+category+'/'+x.short_title+'" href="/'+category+'/'+x.short_title+'"><li>'+x.title+'</li></a>');
        // '<a _ngcontent-lgy-c2="" routerLink="/'+category+'/'+ x.short_title+'" routerLinkActive="active" ng-reflect-router-link="/game/ACIII" g-reflect-router-link-active="active" class="active" href="/game/ACIII" (mouseover)="ShowDescription('+x.short_title+')"><li _ngcontent-ymv-c2="">'+x.title+'</li></a>');
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
