import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { DataserviceService, Diary } from "../services/dataservice.service";

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Box1Component implements OnInit, AfterViewInit {
  @Input() isVisible = true;

  classes = {
    'wrapper': this.isVisible,
    'wrapper-alt': !this.isVisible

  };

  originalSub = "AfterViewInit";
  @ViewChild('subhead') subhead: ElementRef;

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    this.subhead.nativeElement.innerHTML = "Original text replaced, was " + this.originalSub;
    console.log("subhead:", this.subhead.nativeElement);
  }

  diary: Diary[];

  constructor(public dataService: DataserviceService) { }

  

  ngOnInit(): void {
    this.diary = this.dataService.diary;
  }



}
