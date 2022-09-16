import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'greenfinfrontend';
  constructor() {

  }
  ngOnInit(): void {
    var token = localStorage.getItem('token');
    console.log(token)
  }
}
