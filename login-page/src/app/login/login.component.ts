import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup | any;

  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit(): void {
    this.login = new FormGroup({
      'fname': new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]*$')  
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8)  
      ]),
      'role': new FormControl('user', Validators.required)  
    });
  }

  logindata() {
    if (this.login.invalid) {
      alert('Fill all the fields'); 
      return;
    }

    this.http.get<any>("http://localhost:3000/register").subscribe(res => {
      const user = res.find((a: any) => {
        return a.fname === this.login.value.fname && a.password === this.login.value.password;
      });

      if (user) {
        localStorage.setItem('username', user.fname); 
        localStorage.setItem('role', user.role);
        alert('Successfully accessed ');
        this.login.reset();
        this.route.navigate(['dashboard']);
      } else {
        alert('User was not found!');
        this.route.navigate(['login']);
      }
    }, err => {
      alert('Something went wrong ');
    });
  }
}