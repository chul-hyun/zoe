import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { AuthService } from '../../service/auth.service';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-home',
  template: `
    <div
      class="
        flex 
        w-screen h-screen bg-current-900"
    >
      <header
        class="
          flex items-center justify-between
          w-full h-12 
          bg-current-800"
      >
        <div>
          <div class="mx-5 w-16 h-8 bg-current-700"></div>
        </div>
        <div>
          <ng-container [ngSwitch]="profileStatus">
            <ng-container *ngSwitchCase="'loading'">
              <div class="mx-5">
                <div class="">loading</div>
              </div>
            </ng-container>
            <ng-container *ngSwitchCase="'error'">
              <div
                (click)="kakaoSignIn()"
                class="
                mx-5
                w-32 h-8
                bg-kakao-login bg-center bg-no-repeat bg-contain
                cursor-pointer"
              ></div>
            </ng-container>
            <ng-container *ngSwitchDefault>
              <div class="mx-5">
                <div
                  class="
                  flex items-center justify-center
                  w-8 h-8 rounded-full border-2
                  text-current-300 border-current-700
                  cursor-pointer"
                  (click)="toggleProfileMenu()"
                  #profileMenuButton
                >
                  {{ shortNickname }}
                </div>
              </div>
              <div
                class="
                absolute top-11 right-5
                w-32 h-fit
                border-2 border-current-700 bg-current-800 rounded
               "
                *ngIf="isProfileMenuOpen"
                #profileMenu
              >
                <div class="w-full h-fit py-2 px-3 border-b border-current-700">
                  <div class="text-current-300 text-xs leading-6">
                    Signed in as
                    <p class="text-current-100">{{ nickname }}</p>
                  </div>
                </div>

                <!--TODO 반복문-->
                <div class="w-full h-fit py-2 px-3 cursor-pointer border-b border-current-700">
                  <div class="text-current-300 text-xs hover:text-current-50">Profile</div>
                </div>
                <!-- Add items -->

                <div class="w-full h-fit py-2 px-3 cursor-pointer" (click)="logout()">
                  <div class="text-current-300 text-xs hover:text-current-50">Sign out</div>
                </div>
              </div>
            </ng-container>
          </ng-container>
        </div>
      </header>
    </div>
  `,
})
export class HomeComponent {
  @ViewChild('profileMenu') profileMenu!: ElementRef | undefined;
  @ViewChild('profileMenuButton') profileMenuButton!: ElementRef | undefined;

  // TODO: 로그아웃 시 프로필 메뉴가 닫히지 않는 문제 해결 (컴포넌트 언마운트 시 처리)
  isProfileMenuOpen = true;

  constructor(private authService: AuthService, private profileService: ProfileService) {}

  get profile() {
    return this.profileService.profile;
  }

  get profileStatus() {
    return this.profileService.profileStatus;
  }

  get nickname() {
    return this.profile?.nickname;
  }

  get shortNickname() {
    return this.profile?.nickname.slice(0, 1).toLocaleUpperCase();
  }

  kakaoSignIn() {
    this.authService.getTokens();
  }

  logout() {
    this.authService.removeTokens();
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeProfileMenu(event: MouseEvent) {
    if (
      this.profileMenu?.nativeElement.contains(event.target) ||
      this.profileMenuButton?.nativeElement.contains(event.target)
    )
      return;

    this.isProfileMenuOpen = false;
  }
}
