import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  }   from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  public getRoute;
  public router;
  constructor(_router: Router,private route:ActivatedRoute) {
    this.getRoute = route;
    this.router = _router;
    console.log(this.router.url);
  }

  ngOnInit() {

  }

}



// WEBPACK FOOTER //
// F:/Machine Test/machineTest/src/app/about-us/about-us.component.ts
