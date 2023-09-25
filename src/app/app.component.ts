import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'registration';
  signupUsers : any[] =[];
  signupObj: any={
    userName:'',
    email:'',
    password:''
  };
  loginObj: any=
  {
    userName:'',
    password:''
  };

  constructor() {}
  ngOnInit(): void {
      
  }

  onSingUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
  }

  onLogin(){}
}
