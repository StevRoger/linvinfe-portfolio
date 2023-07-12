import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  constructor() { }

  private readonly clientId = '102743688519978274168'; // Replace with your own client ID
  private readonly scope = 'https://www.googleapis.com/auth/spreadsheets.readonly';
  private readonly discoveryDocs = ['https://sheets.googleapis.com/$discovery/rest?version=v4'];
  private auth2: any;
  private isSignedInSubject = new BehaviorSubject<boolean>(false);

  isSignedIn$ = this.isSignedInSubject.asObservable();

  initialize() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.clientId,
        scope: this.scope
      });

      this.auth2.isSignedIn.listen(this.updateSignInStatus.bind(this));
      this.updateSignInStatus(this.auth2.isSignedIn.get());
    });
  }

  private updateSignInStatus(isSignedIn: boolean) {
    this.isSignedInSubject.next(isSignedIn);
  }

  signIn() {
    this.auth2.signIn();
  }

  signOut() {
    this.auth2.signOut();
  }
}
