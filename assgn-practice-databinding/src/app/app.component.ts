import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assgn-practice-databinding';
  username = 'default-username';

  isDisabled = false; // initially enabled

  onUpdateButtonEnabled(event: any) {
    this.isDisabled = (<HTMLInputElement>event.target).value.length > 0 ? false : true;
  }

  onClickResetUsername(event: any) {
    this.username = '';
    this.onUpdateButtonEnabled(event);
  }
}
