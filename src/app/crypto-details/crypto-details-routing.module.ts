import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { CryptoDetailsComponent } from './crypto-details.component';

@Injectable({providedIn: 'root'})
export class ResolveChildAtTitle implements Resolve<string>{
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string{
    return `Crypto - ${route.paramMap.get("id")}` ?? 'Coin'
    
  }
}

const routes: Routes = [{ path: '', title: ResolveChildAtTitle, component: CryptoDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoDetailsRoutingModule { }
