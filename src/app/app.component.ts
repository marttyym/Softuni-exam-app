import { Component, OnDestroy, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Crypto Resources';

  constructor(private angularFireAuth: AngularFireAuth){}

  ngOnInit(): void{
    
  }

  ngOnDestroy(): void{
    
  }
}
