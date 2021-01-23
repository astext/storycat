import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

declare var require: any;



@Component({
  selector: 'app-diagnostics',
  templateUrl: './diagnostics.component.html',
  styleUrls: ['./diagnostics.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class DiagnosticsComponent implements OnInit {

  
  appver = require("../../../package.json").version;
  bootstrapver = require("../../../node_modules/bootstrap/package.json").version;
  angularnom = require("../../../node_modules/@angular/core/package.json").name;
  angularver = require("../../../node_modules/@angular/core/package.json").version;
  ngclinom = require("../../../node_modules/@angular/compiler-cli/package.json").name;
  ngcliver = require("../../../node_modules/@angular/compiler-cli/package.json").version;
  typescriptnom = require("../../../node_modules/typescript/package.json").name;
  typescriptver = require("../../../node_modules/typescript/package.json").version;
  fontawesomenom = require("../../../node_modules/@fortawesome/fontawesome-free/package.json").name;
  fontawesomever = require("../../../node_modules/@fortawesome/fontawesome-free/package.json").version;

  lastUpdate = new Date(document.lastModified);

  



  constructor() { }

  ngOnInit(): void {
  }

}
