import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDzNkA864bX3HQ-FRLQq-HhMtyIYsI4HzE",
    authDomain: "choruspool-5b2e8.firebaseapp.com",
    databaseURL: "https://choruspool-5b2e8.firebaseio.com",
    storageBucket: "choruspool-5b2e8.appspot.com",
    messagingSenderId: "1032090914042"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
