import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { MarketData } from 'shared/models/market-data.model';

@Injectable({
  providedIn: 'root',
})
export class CryptoPricesService {
  private _marketData: MarketData[] = [];

  get marketData(): MarketData[] {
    return this._marketData;
  }

  set marketData(marketData: MarketData[]) {
    this._marketData = marketData;
  }

  constructor(private httpClient: HttpClient) {}

  fetchMarketData() {
    return this.httpClient
      .get<{ config: any; data: MarketData[]; usage: any }>(
        'https://lunarcrush.com/api3/coins?limit=10',
        {
          headers: {
            Authorization: 'Bearer my53ccara8a4777extx7l78h9jlbexdrefh1hd619',
          },
        }
      )
      .pipe(
        tap((response) => {
          this.marketData = response.data;
        })
      );
  }
}
