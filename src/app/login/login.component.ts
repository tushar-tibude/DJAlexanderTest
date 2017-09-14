import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users= [
    {
      "name": "tushar",
      "email": "tushar@tt.com",
      "password": "123"
    },
    {
      "name": "tt",
      "email": "tt@tt.tt",
      "password": "ttt"
    }
  ];
  public emailId:string;
  public password:string;
  public isError:boolean=true;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  public  onSubmitClick(){
    this.users.forEach((element) => {
      if(element.email===this.emailId && element.password===this.password){
        this.router.navigate(['/aboutus']);
        this.isError=true;
      }else{
        this.isError=false;
      }
    });

  }
}



// WEBPACK FOOTER //
// F:/Machine Test/machineTest/src/app/login/login.component.ts
