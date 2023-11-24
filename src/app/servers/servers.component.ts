import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', //Element selector
//   selector: '.app-servers', //Class Selector
//   selector: '[app-servers]', //Attribute Selector
//   templateUrl: './servers.component.html',
  template: `<app-server></app-server>
             <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
