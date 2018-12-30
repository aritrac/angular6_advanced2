import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // external stylesheet of the component
  // styleUrls: ['./app.component.css']
  // inline style for the component
  styles: [`
    h3 {
      color: dodgerblue
    }
  `]
})
export class AppComponent {
}
