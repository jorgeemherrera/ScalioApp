import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'scalio-app';
  search;
  users: [];
  errorMessage;
  loading: boolean = false;

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }


  getLoginAccount() {
    this.errorMessage = "";
    this.accountService.getAccount(this.search)
      .subscribe(
        (response) => {
          console.log('response received')
          this.users = response.items;
          console.log('this.users', this.users)
        },
        (error) => {
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {
          console.error('Request completed')
          this.loading = false;
        })
  }
}
