import { Component, Input, OnInit } from '@angular/core';

import { StorycatService, Stories } from "../services/storycat.service";

@Component({
  selector: 'app-storycat',
  templateUrl: './storycat.component.html',
  styleUrls: ['./storycat.component.scss']
})
export class StorycatComponent implements OnInit {

  @Input() htagShade = "#fffff0";
  @Input() altShade = "#f0ffff";

  stories: Stories[];

  @Input() isVisible = true;

  classes = {
    'wrapper-alt': this.isVisible,
    'wrapper': !this.isVisible

  };

  classesSwap() {

    if (this.classes.wrapper) {
      this.classes.wrapper = !this.isVisible;
      this.classes['wrapper-alt'] = this.isVisible;
    }
    else {
      this.classes.wrapper = this.isVisible;
      this.classes['wrapper-alt'] = !this.isVisible;

    }

    //this.isVisible = !this.isVisible ;

    //console.log("visibility: ", this.isVisible );

  }



  constructor(public dataService: StorycatService) { }



  ngOnInit(): void {
    this.stories = this.dataService.stories;
  }

}
