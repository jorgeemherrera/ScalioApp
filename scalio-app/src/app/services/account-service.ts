import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class AccountService {
    private url: string;
    user;

    constructor(private httpClient: HttpClient) {}

    public getAccount(account: string): Observable<any> {
        this.url = `https://api.github.com/search/users?q=`;
        return this.httpClient.get(this.url + account);
    }
}