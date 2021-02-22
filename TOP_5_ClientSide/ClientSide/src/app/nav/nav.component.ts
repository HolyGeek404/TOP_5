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

  RetriveGameNavDesc(category:string)
  {
    this.http.get("https://localhost:5001/api/"+category+"/description/").subscribe(response =>
    {
      this.data = response;

      this.data.forEach((x: { title: any; description: any; description_img_path: any; }) => {

        this.storage.setItem(x.title,x.description)
        this.storage.setItem(x.title+"_NavImgPath",x.description_img_path)
      });

      $('#navDescList').empty();
      this.CreateCategoryListDescription(response,category); 
      
    })

    this.ShowSpecificCategoryElements();
  }

  CreateCategoryListDescription(data: any, category:string)
  {
    data.forEach((x: { title: string; }) => {
      var z = "'"+x.title+"'";
      $("#navDescList").append(
        '<a onmouseover="a'+'('+z+')'+'" routerlink="/'+category+'/'+x.title+'" href="/'+category+'/'+x.title+'"><li>'+x.title+'</li></a>');
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