import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import { Chorus } from './chorus';
import { FirebaseService } from '../firebase.service';


const URL_PATH = '/SUN/chorus';


@Component({
  selector: 'ch-chorus',
  templateUrl: './chorus.component.html',
  styleUrls: ['./chorus.component.css']
})
export class ChorusComponent implements OnInit {

  choruses : FirebaseListObservable<any[]>;
  allChorus: Chorus[] = [];

  constructor(private firesvc: FirebaseService) {}

  ngOnInit() {
    this.allChorus = this.firesvc.getAllChorus();
    // this.choruses = this.af.database.list(URL_PATH);
    // this.choruses.subscribe(x => {
    //     this.allChorus = x.map(function(a) {
    //       return new Chorus(a.$key, a.name, a.comments, a.defValue);
    //     })
    //   });
  }

  postChorusSample() {
    this.firesvc.addChorus('Αλιμος', 'Μπλα μπλα', 12);
    // this.choruses.push({name: "Χορωδία 7ου Δημοτικού Βύρωνα", defValue: 10, comments:"Πρόβες κάθε Σάββατο 10:30πμ"});
  }
}




