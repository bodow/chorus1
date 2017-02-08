import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import { Chorus } from './chorus/chorus';


const PATH_CHORUS = '/SUN/chorus';


@Injectable()
export class FirebaseService {

  choruses : FirebaseListObservable<any[]>;
  allChorus: Chorus[] = [];

  constructor(private af: AngularFire) {}

  getAllChorus(): Chorus[] {
    this.choruses = this.af.database.list(PATH_CHORUS);
    this.choruses.subscribe(x => {
        this.allChorus = x.map(function(a) {
          return new Chorus(a.$key, a.name, a.comments, a.defValue);
        })
      });
      return this.allChorus;
  }  

  addChorus(name: string, comments?: string, defValue?: number) {
    let o = new Object();
    if (name) o['name'] = name;
    if (comments) o['comments'] = comments;
    if (defValue) o['defValue'] = defValue;
    this.choruses.push(o);
  }

}
