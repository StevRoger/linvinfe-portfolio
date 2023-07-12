import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  constructor() { }

  private readonly clientId = '507060415453-nb53p4gcjllp293ld06b7p08vs8phkok.apps.googleusercontent.com'; // Replace with your own client ID
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
//https://chat.openai.com/share/b51b0cdc-ce5a-4473-88dd-06af0c97e477
//https://github.com/FranzDiebold/ng-google-sheets-db-library
//https://console.cloud.google.com/apis/api/sheets.googleapis.com/credentials?authuser=2&project=linvinfe-portfolio&supportedpurview=project
