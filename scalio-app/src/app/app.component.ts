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
  sortOrder: string = 'asc';
  sortColumn: string = 'login';

  constructor(private accountService: AccountService) { }

  getLoginAccount() {
    this.accountService.getAccount(this.search).subscribe(data => {
      console.log('que es data', data)
      this.account = data;
      this.users = data.items;
    })
  }
  SortData(col: string): void {
    if (this.sortColumn == col) {
      if (this.sortOrder == 'asc') this.sortOrder = 'desc';
      else this.sortOrder = 'asc';
    } else {
      this.sortColumn = col;
      this.sortOrder = 'asc';
    }
    this.users = this.users.sort((a, b) => {
      if (a[col] < b[col]) return this.sortOrder == 'asc' ? -1 : 1;
      if (a[col] > b[col]) return this.sortOrder == 'asc' ? 1 : -1;
      return 0;
    });
  }
}
