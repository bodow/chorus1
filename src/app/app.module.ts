import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { ChorusComponent } from './chorus/chorus.component';
import { FirebaseService } from './firebase.service';

export const firebaseConfig = {
    apiKey: "AIzaSyDzNkA864bX3HQ-FRLQq-HhMtyIYsI4HzE",
    authDomain: "choruspool-5b2e8.firebaseapp.com",
    databaseURL: "https://choruspool-5b2e8.firebaseio.com",
    storageBucket: "choruspool-5b2e8.appspot.com",
    messagingSenderId: "1032090914042"
};

@NgModule({
  declarations: [
    AppComponent,
    ChorusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
