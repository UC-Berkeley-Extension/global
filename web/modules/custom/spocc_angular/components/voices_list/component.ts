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

  constructor(@Inject(Http) http: Http) {
    http.get(this.url).map(res => res.json()).subscribe((data) {
      this.voices = data.nodes;
      console.log(this.voices);
    });
  }

}
