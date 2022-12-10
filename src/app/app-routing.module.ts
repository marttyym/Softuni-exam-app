import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
{
  path: '',
  title: 'Crypto app exam',
  component: DashboardComponent
},
{ path: 'crypto/:id', 
  loadChildren: () => import('./crypto-details/crypto-details.module').then(m => m.CryptoDetailsModule) },
{ path: 'auth/signup', title: 'Sign up', loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupModule) },
{ path: 'auth/login', title: 'Login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
{
  path: '**',
  component: PageNotFoundComponent
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
