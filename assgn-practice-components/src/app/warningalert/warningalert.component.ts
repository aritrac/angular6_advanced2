import { Component } from '@angular/core';

@Component({
  selector: 'app-warningalert',

  // Using inline template
  template: `
  <h3>This is a Warning Alert</h3>
  <app-subwarningalert></app-subwarningalert>
  `,

  // Using inline styling on the component
  styles: [`
    h3 {
        color: red
    }
    h4 {
      color: darkred
    }
  `]
})
export class WarningalertComponent {
}
