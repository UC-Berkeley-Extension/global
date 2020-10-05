import {Component} from "@angular/core";
import {Inject} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  moduleId: __moduleName,
  selector: "voices-list",
  templateUrl: 'template.html'
})

export class VoicesList{
  url: string = 'https://voices.berkeley.edu/international-feed/post/all/tag/all/program/all';

  // Constructor method sets our data from the JSON callback.
  constructor(@Inject(Http) http: Http) {
    // TODO: error handling.
    http.get(this.url).map(res => res.json()).subscribe((data) {
      var items = data.nodes;
      // Data is nested inside the 'post' of each item.
      this.posts = Object.keys(items).map(key => items[key].post);
    });
  }

  // Helper function to check data structures.
  getKeys(obj){
    return Object.keys(obj)
  }

}
