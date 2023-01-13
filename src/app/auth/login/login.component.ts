import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  details:Details[] = [{email:"sneh", password:"sneh"}]
  isLoading: boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  login(email:string, password:string) {
    this.isLoading = true;
    this.details = [...this.details,{email:email,password:password} ]
    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 3000);
  }
}

export interface Details{
  email: string;
  password: string;
}
