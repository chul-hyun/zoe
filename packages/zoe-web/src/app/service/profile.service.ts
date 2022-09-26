import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserGetResponse } from 'zoe-api';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profile: Profile | null = null;
  profileStatus: 'loading' | 'loaded' | 'error' = 'loading';

  // TODO accessToken 의 데이터를 이용하여 사용자 정보를 미리 가져온다. API 통신후 사용자 정보를 update 한다. (rxjs를 이용하여 구현)

  constructor(private authService: AuthService, private http: HttpClient) {
    this.initProfile();
  }

  private initProfile() {
    if (this.authService.accessTokenSnapshot) {
      this.fetchProfile();
    } else {
      this.setProfile(null);
    }

    this.authService.accessToken$.subscribe((accessToken) => {
      if (accessToken) this.fetchProfile();
      this.setProfile(null);
    });
  }

  private fetchProfile() {
    this.http.get<UserGetResponse>('http://localhost:3000/users/me').subscribe({
      next: (data) => {
        this.setProfile(data);
      },
      error: (err) => {
        console.error(err);
        this.setProfile(null);
      },
    });
  }

  private setProfile(profile: Profile | null) {
    this.profile = profile;
    this.profileStatus = profile ? 'loaded' : 'error';
  }
}

interface Profile {
  id: string;
  nickname: string;
}
