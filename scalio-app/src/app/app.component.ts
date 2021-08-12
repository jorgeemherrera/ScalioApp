import { Component } from '@angular/core';
import { AccountService } from './services/account-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scalio-app';
  p: number = 1;
  search;
  users: [];
  account;
  alertMessage: boolean;
  loading: boolean = false;

  constructor(private accountService: AccountService) { }
  
  onKeyBackspace(event) {
    console.log(event);
    if (event.isTrusted) {
      this.alertMessage = false;
      console.log('this.alertMessage', this.alertMessage)
    }
  }
  getLoginAccount() {
    this.accountService.getAccount(this.search).subscribe(data => {
      this.account = data;
      this.users = data.items;
    })
  }
}
