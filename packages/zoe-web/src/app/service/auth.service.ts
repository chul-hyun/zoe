import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessToken$ = new Subject<string | null>();
  accessTokenSnapshot: string | null = null;
  #source$: Observable<StorageEvent> = fromEvent<StorageEvent>(window, 'storage');

  constructor() {
    this.initAccessToken();
    this.initAccessTokenSnapshot();
  }

  getTokens() {
    window.open('http://localhost:3000/auth/oauth', '_blank');
  }

  removeTokens() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    // TODO: subscribe 감지를 못함
    this.accessToken$.next(localStorage.getItem(ACCESS_TOKEN_KEY));
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  }

  private initAccessToken() {
    this.#source$.subscribe((data) => {
      if (data.key === ACCESS_TOKEN_KEY) this.accessToken$.next(data.newValue);
    });
  }

  private initAccessTokenSnapshot() {
    this.accessTokenSnapshot = localStorage.getItem(ACCESS_TOKEN_KEY);
    this.accessToken$.subscribe((accessToken) => {
      this.accessTokenSnapshot = accessToken;
    });
  }
}
