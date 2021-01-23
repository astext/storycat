import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() bodyShade = "#fffff0" ;
  @Input() bgDiagsub = "#ffffe0" ;
  @Input() bgDiag = "#ffffc0" ;

  

  constructor() { }

  ngOnInit(): void {
  }

}
