import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { MarketData } from 'shared/models/market-data.model';



@Injectable({
  providedIn: 'root'
})
export class CoinOfTheDayService {

  private _coin?: {name: string, symbol: string} = undefined;

  get coin(){
    return this._coin;
  }

  set coin(coin){
    this._coin = coin;
  }

  constructor(private httpClient: HttpClient) { }

  fetchCoinOfTheDay(){
    return this.httpClient
    .get<{config: any, data: {name: string; symbol: string}, usage: any}>(
      'https://lunarcrush.com/api3/coinoftheday', {
        headers: {
          'Authorization': 'Bearer my53ccara8a4777extx7l78h9jlbexdrefh1hd619'
      }
      }
      ).pipe(
      tap((response) => {
        console.log(response)
        this.coin = response.data;
      })
      )
  }
}


