import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tube';

  currentRoute: string = "profile";

  switchRoute(newRoute: string) {
      this.currentRoute = newRoute;
      console.log(this.currentRoute);
  }
}
