import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpService } from './http.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class headerInterceptor implements HttpInterceptor {
  constructor(private router: Router, private http: HttpClient) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('user');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    }

    const lang = localStorage.getItem('lang') || 'en';
    req = req.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
      },
    });

    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          // Perform response-specific actions here if needed
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.log('====================================');
          console.log('error.message', error.message);
          console.log('====================================');
          // this.handleUnauthorized();
        }
        return throwError(() => error);
      })
    );
  }

  deleteCookie(name: string): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  private handleUnauthorized() {
    const token = localStorage.getItem('user');
    localStorage.removeItem('user');
    this.deleteCookie('userData');
    this.router.navigate(['/auth']).then((success) => {
      if (!success) {
        console.error('Navigation to /auth failed.');
      }
    });
  }
}
