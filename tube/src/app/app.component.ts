import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tube';

  loggedIn = false;

  currentRoute: string = "profile";

  switchRoute(newRoute: string) {
      this.currentRoute = newRoute;
      console.log(this.currentRoute);
  }

  attemptLogin(respose: boolean = false): void {
    this.loggedIn = respose;
    console.log(this.loggedIn)
  }
}
