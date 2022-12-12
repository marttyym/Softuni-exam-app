import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CoinOfTheDayComponent } from './dashboard/coin-of-the-day/coin-of-the-day.component';
import { CryptoPricesComponent } from './dashboard/crypto-prices/crypto-prices.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FirebaseAuthModule } from './shared/firebase-auth/firebase-auth.module';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { enviroment } from 'src/enviroments/enviroment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './shared/services/auth.service';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
//import { MaterialModule } from './material/material.module';
import { AngularMaterialModule } from './material/material.module';
import { BookService } from './shared/book.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { LoginComponent } from './auth/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CoinOfTheDayComponent,
    CryptoPricesComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    AddBookComponent,
    EditBookComponent,
    BookListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatCardModule,
    MatSnackBarModule,
    FirebaseAuthModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularMaterialModule,
   AngularFireDatabaseModule,
   FormsModule,
   ReactiveFormsModule,
   MatChipsModule,
   MatFormFieldModule,
   MatInputModule
   //MaterialModule,
  ],
  providers: [{provide: FIREBASE_OPTIONS, useValue: enviroment.firebaseConfig}, BookService],
  bootstrap: [AppComponent, AuthService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
