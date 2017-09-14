import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLogin:boolean=true;
  constructor(private router: Router) {

  }

  ngOnInit() {

  }
  public onClickLogOut(){
    this.router.navigate(['/login']);
  }
}
