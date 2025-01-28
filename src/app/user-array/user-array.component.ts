import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExclamationPipe } from "../exclamation.pipe";

@Component({
  selector: 'app-user-array',
  imports: [CommonModule, FormsModule, ExclamationPipe],
  templateUrl: './user-array.component.html',
  styleUrl: './user-array.component.scss'
})
export class UserArrayComponent {
  private _users: string[] = ["Doe", "Jane", "Alice"];
  public newUserName: string = "";

  get users(): string[] {
      return this._users;
  }


  addNewUser() {
    if(this.newUserName){
        this.users.push(this.newUserName);
        this.newUserName = '';
    }
  }

}
