import {Component} from "@angular/core";
import {ElementRef} from '@angular/core';
import {Inject} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  moduleId: __moduleName,
  selector: "voices-spotlight",
  templateUrl: 'template.html'
})

export class VoicesSpotlight{
  public post: string = 'all';
  public tag: string = 'all';
  public program: string = 'all';
  public baseUrl: string = 'https://voices.berkeley.edu/single-post/';

  // Constructor method sets our data from the JSON callback.
  constructor(
    @Inject(Http) http: Http,
    @Inject(ElementRef) elementRef: ElementRef) {

    this.setVariables(elementRef);
    var fetchUrl = this.baseUrl + this.post + '/tag/' + this.tag + '/cert/' + this.program + "/area/International";
    
    this.post = {
      content: "",
      image: {
        src: "https://voices.berkeley.edu/sites/default/files/styles/blog_well/public/global-logo-celebration-blog.jpg?itok=5PlyyzNQ",
      }
      link: "",
      path: "",
      tags: [],
      title: "",
    };

    // TODO: error handling.
    http.get(fetchUrl).map(res => res.json()).subscribe((data) {
      var items = data.nodes;
      // Data is nested inside the 'post' of each item.
      this.posts = Object.keys(items).map(key => items[key].post);
      this.post = this.posts[0];
      this.post.tags = this.post.tags ? this.post.tags.split(', ') : [];

      // "International, international students"
      console.log("this.post");
      console.log(this.post);
    });
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
