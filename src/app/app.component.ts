import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 parent = 'Projet AMS 2023';

 processEvent(message :any) {
  alert("Message du fils est : " + message);
}


}
