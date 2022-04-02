import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../commons/account';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.baseUrl + '/accounts');
  }

  withdraw(accountNumber: string | undefined, amount: number): Observable<Account> {
    return this.httpClient.post<Account>(this.baseUrl + '/accounts/withdraw?accountNumber=' + accountNumber + '&amount=' + amount, null);
  }

}
