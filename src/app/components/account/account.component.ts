import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/commons/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts : Account[]  = new Array();
  selectedAccount : Account = new Account();
  show : boolean = false;
  withdrawalAmount : number = 0;

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {

    this.accountService.getAccounts()
    .subscribe(data => {
      this.accounts = data;
    }, error => {
      console.log(error);
    });
  }

  handleBankAccount(account : Account) {
    this.selectedAccount = account;
    this.show = true;
  }

  refresh() {
    this.accountService.getAccounts()
    .subscribe(data => {
      this.accounts = data;
    }, error => {
      console.log(error);
    });
  }

  withdraw() {
    this.accountService.withdraw(this.selectedAccount?.accountNum, this.withdrawalAmount)
    .subscribe(data => {
      console.log(data);
      this.selectedAccount = data;
      this.refresh();
      this.withdrawalAmount = 0;
    }, error => {
      console.log(error);
    });
  }

}
