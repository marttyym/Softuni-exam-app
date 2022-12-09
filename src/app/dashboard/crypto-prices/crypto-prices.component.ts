import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MarketData } from 'shared/models/market-data.model';
import { CryptoPricesService } from './crypto-prices.service';

@Component({
  selector: 'app-crypto-prices',   
  templateUrl: './crypto-prices.component.html',
  styleUrls: ['./crypto-prices.component.css']
})
export class CryptoPricesComponent implements OnInit, OnDestroy{
  subscriptions: Subscription[] = [];
  marketData: MarketData[] = [];

  constructor(
    private cryptoPricesService: CryptoPricesService
  ){}

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe())
  }

  ngOnInit(): void { 
    this.marketData = this.cryptoPricesService.marketData

    if(!this.marketData?.length){
      this.subscriptions.push(this.cryptoPricesService.fetchMarketData().subscribe(() => {
        this.marketData = this.cryptoPricesService.marketData;
      })
      );
    }
  }
}
