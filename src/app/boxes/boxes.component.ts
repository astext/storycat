import { Component, Input, OnInit, AfterViewInit, ElementRef, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit, AfterViewInit {

  @HostBinding('class')  elementClass = 'make-dark';
  @ViewChild('subhead') subhead: ElementRef ;


  ngAfterViewInit(): void {
    
    console.log();
    
  }


  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    //this.elementRef.nativeElement.style.backgroundColor = '#000000';
    //this.elementRef.nativeElement.style.color = '#ffffff';
    this.elementRef.nativeElement.querySelector('.make-dark');
  }

}
