import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'ch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ch works!';

  choruses : FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.choruses = this.af.database.list('/SUN/chorus');
    console.log(this.choruses);
  }

  postChorusSample() {
    this.choruses.push({name: "Χορωδία 7ου Δημοτικού Βύρωνα", defValue: 10, comments:"Πρόβες κάθε Σάββατο 10:30πμ"});
  }
}
