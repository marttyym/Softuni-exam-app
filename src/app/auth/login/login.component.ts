import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { enviroment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(
    private httpClient: HttpClient, 
    private router: Router, 
    private MatSnackBar: MatSnackBar){}

  ngOnInit(): void {}

  onLogin(loginForm: NgForm){
    const url = "https://softuni-exam-56cc1-default-rtdb.europe-west1.firebasedatabase.app/users.json"

    this.httpClient
    .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${enviroment.firebaseApiKey}`,
        { ...loginForm.value, returnSecureToken: true }
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          sessionStorage.setItem('user', JSON.stringify(response))
          this.MatSnackBar.open(`Hello ${loginForm.value.email}`, "Ok"), {
            verticalPosition: "bottom",
            horizontalPosition: "center",
          }
          this.router.navigate(['/']);
        },
        error: (error) => {
          let errorMessage = "Login failed - " + error.error.error.message;
          this.MatSnackBar.open(errorMessage, "Ok"), {
            verticalPosition: "bottom",
            horizontalPosition: "center",
          }
        },
      });
  }
}
