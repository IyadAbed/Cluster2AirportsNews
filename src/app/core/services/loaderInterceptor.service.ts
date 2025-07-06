import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.show();

    const token = localStorage.getItem('access_token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    }

    const lang = localStorage.getItem('lang') || 'ar';
    request = request.clone({
      setHeaders: {
        'Accept-language': lang,
        'Access-Control-Allow-Origin': '*',
        // tenantId: '6795faa1eece2418e7809e16',
      },
    });

    return next.handle(request).pipe(finalize(() => this.loaderService.hide()));
  }
}
