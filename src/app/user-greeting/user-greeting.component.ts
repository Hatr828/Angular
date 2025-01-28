import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExclamationPipe } from "../exclamation.pipe";

@Component({
  selector: 'app-user-greeting',
  imports: [CommonModule, FormsModule, ExclamationPipe],
  templateUrl: './user-greeting.component.html',
  styleUrls: ['./user-greeting.component.scss'],
})
export class UserGreetingComponent {

  private _userName: string;
  private _isUserLoggedIn: boolean;

  constructor() {
    this._userName = "default";
    this._isUserLoggedIn = false;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get isUserLoggedIn(): boolean{
    return this._isUserLoggedIn;
  }

  set isUserLoggedIn(value: boolean) {
    this._isUserLoggedIn = value;
  }

  changeName() {
    this.userName = "BOB";
  }

  login() {
    this._isUserLoggedIn = true;
  }
}
