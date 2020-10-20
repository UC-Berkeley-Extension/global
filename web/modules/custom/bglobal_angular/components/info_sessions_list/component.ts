import {Component} from "@angular/core";
import {ElementRef} from '@angular/core';
import {Inject} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  moduleId: __moduleName,
  selector: "info-sessions-list",
  templateUrl: 'template.html'
})

export class InfoSessionsList {
  public cert: string = 'all';
  public limit: number = 4;
  const baseUrl: string = 'https://voices.berkeley.edu/info-sessions/json/';
  public view = { 
    number: 0,
  };
  public sessions = {};

  // Constructor method sets our data from the JSON callback.
  constructor(
    @Inject(Http) http: Http,
    @Inject(ElementRef) elementRef: ElementRef) {

    this.setVariables(elementRef);

    const fetchUrl = this.baseUrl + 'cert/' + this.cert + '/area/International';

    // TODO: error handling.
    http.get(fetchUrl).map(res => res.json()).subscribe((data) {
      this.sessions = this.parseMonthDay(data.sessions);
      this.view = data.view;
    });
  }

  // Helper function to set variables for the current instance.
  setVariables(elementRef) {
    // Strip the 'instance-id-' off the beginning of our selector for uuid.
    var instanceId = elementRef.nativeElement.id.substring(12);
    // Get the values set by our configuration.
    this.cert = drupalSettings.pdb.configuration[instanceId].cert;
    this.limit = drupalSettings.pdb.configuration[instanceId].limit || this.limit;
  }
  parseMonthDay(obj) {
    const sessions = obj;
    for ( let i in sessions ) {
      let sessionDate = sessions[i].date;
      sessions[i].jsDate = new Date(sessionDate.substr(0, sessionDate.indexOf(" - ")));
    }
    return sessions;
  }

}
