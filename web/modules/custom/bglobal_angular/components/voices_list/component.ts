import {Component} from "@angular/core";
import {ElementRef} from '@angular/core';
import {Inject} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  moduleId: __moduleName,
  selector: "voices-list",
  templateUrl: 'template.html'
})

export class VoicesList{
  public instances: array = [];
  public post: string = 'all';
  public tag: string = 'all';
  public program: string = 'all';
  public baseUrl: string = 'https://voices.berkeley.edu/international-feed/';

  // Constructor method sets our data from the JSON callback.
  constructor(
    @Inject(Http) http: Http,
    @Inject(ElementRef) elementRef: ElementRef) {

    this.setVariables(elementRef);

    var fetchUrl = this.baseUrl + 'post/' + this.post + '/tag/' + this.tag + '/program/' + this.program;

    // TODO: error handling.
    http.get(fetchUrl).map(res => res.json()).subscribe((data) {
      var items = data.nodes;
      // Data is nested inside the 'post' of each item.
      this.posts = Object.keys(items).map(key => items[key].post);
    });
    console.log(this.instances);
    console.log(fetchUrl);
  }

  // Helper function to set variables for the current instance.
  setVariables(elementRef) {
    // Strip the 'instance-id-' off the beginning of our selector for uuid.
    var instanceId = elementRef.nativeElement.id.substring(12);
    // Get the values set by our configuration.
    this.post = drupalSettings.pdb.configuration[instanceId].post;
    this.tag = drupalSettings.pdb.configuration[instanceId].tag;
    this.program = drupalSettings.pdb.configuration[instanceId].program;
  }

  // Helper function to check data structures.
  getKeys(obj){
    return Object.keys(obj)
  }

}
