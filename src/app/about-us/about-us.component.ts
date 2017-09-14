import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { Router,NavigationEnd  }   from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements AfterViewChecked  {
  public getRoute;
  public router;
  constructor(_router: Router,private route:ActivatedRoute) {
    this.getRoute = route;
  }

  ngAfterViewChecked() {
      let ele=document.getElementById(this.getRoute.snapshot.url[1].path)
      ele.scrollIntoView(false);
      }

}



// WEBPACK FOOTER //
// F:/Machine Test/machineTest/src/app/about-us/about-us.component.ts
