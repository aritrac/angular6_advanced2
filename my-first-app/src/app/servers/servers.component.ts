import { Component, OnInit } from '@angular/core';

@Component({
  // attribute selector
  // selector: '[app-servers]',

  // class selector
  // selector: '.app-servers',

  // element selector
  selector: 'app-servers',

  // external template file
  templateUrl: './servers.component.html',

  // inline template for element selector
  //   template: `<app-server></app-server>
  //              <app-server></app-server>`,

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
