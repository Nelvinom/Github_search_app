import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private userName: string;
  // private clientId: string = '<Client Id>';
  // private clientSecret: string = '<Client Secret Key>';
  private clientId: string = '60b9f23dedffbdfc476c';
  private clientSecret: string = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';

  constructor(private _http: Http) {
      // console.log('Github Service Ready.');
      this.userName = '';
}
