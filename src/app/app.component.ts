import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserGreetingComponent } from "./user-greeting/user-greeting.component";
import { UserArrayComponent } from "./user-array/user-array.component";

@Component({
  selector: 'app-root',
  imports: [UserGreetingComponent, UserArrayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular';
}
