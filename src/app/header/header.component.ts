import { Component, OnInit ,AfterViewChecked} from '@angular/core';
import { Router ,ActivatedRoute}   from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewChecked {
  public isLogin:boolean=true;
  public getRoute;
  constructor(private _router: Router,private route:ActivatedRoute) {
    this.getRoute = route;

  }

  ngAfterViewChecked() {
  if(this._router.url.includes("login")){
    this.isLogin=false;
  }else{
      this.isLogin=true;
  }
  }
  public onClickLogOut(){
    this._router.navigate(['/login']);
  }
}
