import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import { Chorus } from './chorus/chorus';


const PATH_CHORUS = '/SUN/chorus';


@Injectable()
export class FirebaseService {

  public choruses : FirebaseListObservable<any[]>;
  allChorus: Chorus[] = [];

  constructor(private af: AngularFire) {
    this.choruses = this.af.database.list(PATH_CHORUS);
  }

  // getAllChorus(): Chorus[] {
  //   this.choruses.subscribe(x => {
  //       this.allChorus = x.map(function(a) {
  //         return new Chorus(a.$key, a.name, a.comments, a.defValue);
  //       })
  //     });
  //     return this.allChorus;
  // }  

  addChorus(name: string, comments?: string, defValue?: number) {
    let o = new Object({name: name});
    if (typeof comments !== 'undefined') o['comments'] = comments;
    if (typeof defValue !== 'undefined') o['defValue'] = defValue;
    this.choruses.push(o);
  }

}
