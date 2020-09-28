import {Component} from "@angular/core";
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  moduleId: __moduleName,
  selector: "voices-list",
  templateUrl: 'template.html'
})
@Injectable()
export class VoicesList{
  voices: Object[];
  constructor(http:Http) {
    http.get('https://voices.berkeley.edu/international-feed/post/all/tag/all/program/all').subscribe(response => {
      this.voices = response.json();
    });
  }
}
