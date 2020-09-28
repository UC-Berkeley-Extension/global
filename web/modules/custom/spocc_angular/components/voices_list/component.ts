import {Component} from "@angular/core";
import {Http, HTTP_PROVIDERS} from '@angular2/http';

@Component({
  moduleId: __moduleName,
  selector: "voices-list",
  templateUrl: 'template.html'
})
export class VoicesList{
  voices: Object[];
  constructor(http:Http) {
    http.get('https://voices.berkeley.edu/international-feed/post/all/tag/all/program/all').subscribe(response => {
      this.voices = response.json();
    });
  }
}
