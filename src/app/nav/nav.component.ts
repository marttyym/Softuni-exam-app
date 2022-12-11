import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private MatSnackBar: MatSnackBar,
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {}

  onLogout() {
    this.angularFireAuth.signOut();
    this.router.navigate(['auth', 'login'])
  }

  ngOnInit(): void {
    this.angularFireAuth.authState.subscribe((user) => {
      console.log(user)
      this.isLoggedIn = !!user;
    });
  }
}
