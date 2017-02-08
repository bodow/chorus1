import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'ch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ch works!';

  items : FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.items = this.af.database.list('/SUN/chorus');
  }
}
