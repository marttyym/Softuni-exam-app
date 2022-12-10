import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { enviroment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private MatSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    //console.log(this.signupForm.value);

    this.httpClient

      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${enviroment.firebaseApiKey}`,
        { ...this.signupForm.value, returnSecureToken: true }
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.signupForm.reset();
          this.MatSnackBar.open(`Account created`, 'Ok'),
            {
              verticalPosition: 'bottom',
              horizontalPosition: 'center',
            };
          this.router.navigate(['/']);
        },
        error: (error) => {
          let errorMessage = 'Signup failed - ' + error.error.error.message;
          this.MatSnackBar.open(errorMessage, 'Ok'),
            {
              verticalPosition: 'bottom',
              horizontalPosition: 'center',
            };
        },
      });
  }
}
