import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Import firebase */
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: 'AIzaSyC0zPUx0mK5gxnVGikaYm-fDxGnxmhJljs',
  authDomain: 'testes-bac2f.firebaseapp.com',
  databaseURL: 'https://testes-bac2f.firebaseio.com',
  projectId: 'testes-bac2f',
  storageBucket: 'testes-bac2f.appspot.com',
  messagingSenderId: '484715218166',
  appId: '1:484715218166:web:35365d8ce29189fe8c18d7'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
