import { Directive, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDiarycard]'
})


export class DiarycardDirective implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  @ViewChild('cardtrim') cardtrim: ElementRef;

  ngAfterViewInit() {
    this.elementRef.nativeElement.style.borderRadius = '20px';
  }

  ngOnInit() {
this.elementRef.nativeElement.style.borderRadius = '20px';

  }

  // https://medium.com/javascript-in-plain-english/using-built-in-angular-directives-849c4e7fd882

  //https://www.techiediaries.com/angular-elementref/

}
