import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',

  // Using external template file
  templateUrl: './successalert.component.html',

  // Using external styling on the component
  styleUrls: ['./successalert.component.css']
})
export class SuccessalertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
