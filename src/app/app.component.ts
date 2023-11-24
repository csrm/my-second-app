import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Element Selector
//   selector: '.app-root' //Class Selector
//   selector: '[app-root]' //Attribute Selector
  templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
  styles: [`
     h3{
     color: dodgerblue;
     }
  `]
})
export class AppComponent {
  title = 'my-second-app';
}
