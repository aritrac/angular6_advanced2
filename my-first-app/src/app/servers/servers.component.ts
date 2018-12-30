import { Component, OnInit } from '@angular/core';

@Component({
  // attribute selector
  // selector: '[app-servers]',

  // class selector
  // selector: '.app-servers',

  // element selector
  selector: 'app-servers',

  // external template file
  // templateUrl: './servers.component.html',

  // inline template for element selector
     template: `<app-server></app-server>
                <app-server></app-server>`,

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
