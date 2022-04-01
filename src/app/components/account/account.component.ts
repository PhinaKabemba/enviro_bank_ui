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

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {

    this.accountService.getAccounts()
    .subscribe(data => {
      this.accounts = data;
    }, error => {
      console.log(error);
    });
  }

}
