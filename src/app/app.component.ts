import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Element Selector
//   selector: '.app-root' //Class Selector
//   selector: '[app-root]' //Attribute Selector
  templateUrl: './app.component.html',    //template from html file
//   template: `<div class = "container"> //direct html code
//                   <div class = "row">
//                     <h3>I am in the App Component!!</h3>
//                     <hr/>
//                     <app-servers></app-servers>
//                   </div>
//                 </div>`,
//   styleUrls: ['./app.component.css']  //style from a css file
  styles: [`
     h3{
     color: dodgerblue;
     }
  `]
})                                       //direct css code
export class AppComponent {
  title = 'my-second-app';
}
