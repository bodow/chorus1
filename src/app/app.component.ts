import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

@Component({
  selector: 'ch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ch works!';

  choruses : FirebaseListObservable<any[]>;
  chors: any[];

  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.choruses = this.af.database.list('/SUN/chorus');
    this.choruses.subscribe(x => {
      this.chors = x.map(function(a) {
        return {name: a.name, comments: a.comments};
      });
      console.log(this.chors);
    })
  }

  postChorusSample() {
    this.choruses.push({name: "Χορωδία 7ου Δημοτικού Βύρωνα", defValue: 10, comments:"Πρόβες κάθε Σάββατο 10:30πμ"});
  }
}
