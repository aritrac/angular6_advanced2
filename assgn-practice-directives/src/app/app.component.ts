import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assgn-practice-directives';
  isDisplayed = true;
  clickCount = 0;
  countStore = [];

  toggleDisplay() {
    this.isDisplayed = !this.isDisplayed;
    this.clickCount ++;
    this.countStore.push(new Date());
  }
}
