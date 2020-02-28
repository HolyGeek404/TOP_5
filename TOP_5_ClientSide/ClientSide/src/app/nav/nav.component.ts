import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  ShowSpecificCategoryElements()
  {
    $("#category_elements_description").animate({ height: 160});
    $("#elements_list").animate({ height: "85%"});
    $("#elements_description").fadeIn(300);
    $("#collapse").animate({ height: "15%"});
  }

  HideSpecificCategoryElements()
  {
    $("#category_elements_description").animate({ height: 0});
    $("#elements_list").animate({ height: "0%"});
    $("#elements_description").fadeOut(300);
    $("#collapse").animate({ height: "0%"});
  }

}
