import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from '../../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.accessTokenSnapshot;

    if (!accessToken) return next.handle(request);

    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return next.handle(authReq);

    // TODO : refresh token logic (http://devstory.ibksplatform.com/2020/03/angular-httpinterceptor-token.html)

    // return this.authService.accessToken$.pipe(
    //   switchMap((accessToken) => {
    //     console.log('intercept', accessToken);
    //
    //     if (!accessToken) return next.handle(request);
    //
    //     return next.handle(
    //       request.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } }),
    //     );
    //   }),
    // );
  }
}
