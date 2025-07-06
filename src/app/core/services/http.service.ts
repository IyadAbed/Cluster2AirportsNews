import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import {  map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FormGroup } from '@angular/forms';
import { Toaster } from './toaster.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {



  private inProduction: boolean = environment.production;
  usersEndPoint: string = '';
  constructor(
    private restService: RestService,
    private http: HttpClient,
    private toaster: Toaster
  ) {
    this.usersEndPoint = environment.apiEndpoint;
    this.usersEndPoint = environment.apiEndpoint;
    // const isProd = environment.production;
    const isProd = environment.production;
    console.log('Is production:', isProd);
    console.log('API endpoint:', this.usersEndPoint);
    const hostname = window.location.hostname;
    const port = window.location.port;
    let endpoint = '';

  }




  removeCookie(name: string) {
    document.cookie = `${name}=; Max-Age=0`;
  }

  getCookie(name: string): string | null {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [key, value] = cookie.split('=');
      if (key === name) {
        return decodeURIComponent(value);
      }
    }
    return null;
  }

  decodeJwtPayload(token: string): any {
    const [, payloadBase64] = token.split('.');
    const payloadJson = this.base64UrlDecode(payloadBase64);
    return JSON.parse(payloadJson);
  }

  base64UrlDecode(base64Url: string): string {
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    while (base64.length % 4) {
      base64 += '=';
    }
    return atob(base64);
  }

  sendGetRequest<TRequest, TResponse>(
    url: string,
    port: number,
    version?: 'v1' | 'v2'
  ) {
    const apiUrl = this.inProduction
      ? `${this.usersEndPoint}/api/${version ? version : 'v1'}/${url}`
      : `${this.usersEndPoint}:${port}/api/${version ? version : 'v1'}/${url}`;
    return this.restService.request<TRequest, TResponse>({
      method: 'GET',
      url: apiUrl,
      withoutBody: true,
      showToaster: false,
    });
  }

  sendPostRequest<TRequest, TResponse>(
    url: string,
    body: any,
    port: number,
    isFormData: boolean = false,
    version?: 'v1' | 'v2'
  ) {
    const apiUrl = this.inProduction
      ? `${this.usersEndPoint}/api/${version ? version : 'v1'}/${url}`
      : `${this.usersEndPoint}:${port}/api/${version ? version : 'v1'}/${url}`;
    return this.restService.request<TRequest, TResponse>({
      method: 'POST',
      url: apiUrl,
      body: body,
      withoutBody: true,
      isFormData: isFormData,
      showToaster: true,
    });
  }

  sendPutRequest<TRequest, TResponse>(
    url: string,
    body: any,
    port: number,
    version?: 'v1' | 'v2'
  ) {
    const apiUrl = this.inProduction
      ? `${this.usersEndPoint}/api/${version ? version : 'v1'}/${url}`
      : `${this.usersEndPoint}:${port}/api/${version ? version : 'v1'}/${url}`;
    return this.restService.request<TRequest, TResponse>({
      method: 'PUT',
      url: apiUrl,
      body: body,
      withoutBody: true,
    });
  }

  sendPatchRequest<TRequest, TResponse>(
    url: string,
    body: any,
    port: number,
    version?: 'v1' | 'v2'
  ) {
    const apiUrl = this.inProduction
      ? `${this.usersEndPoint}/api/${version ? version : 'v1'}/${url}`
      : `${this.usersEndPoint}:${port}/api/${version ? version : 'v1'}/${url}`;
    return this.restService.request<TRequest, TResponse>({
      method: 'PATCH',
      url: apiUrl,
      body,
      withoutBody: true,
    });
  }

  sendPutRequestWithoutBody<TRequest, TResponse>(
    url: string,
    port: number,
    version?: 'v1' | 'v2'
  ) {
    const apiUrl = this.inProduction
      ? `${this.usersEndPoint}/api/${version ? version : 'v1'}/${url}`
      : `${this.usersEndPoint}:${port}/api/${version ? version : 'v1'}/${url}`;
    return this.restService.request<TRequest, TResponse>({
      method: 'PUT',
      url: apiUrl,
      withoutBody: true,
    });
  }

  sendDeleteRequest<TRequest, TResponse>(
    url: string,
    port: number,
    version?: 'v1' | 'v2'
  ) {
    const apiUrl = this.inProduction
      ? `${this.usersEndPoint}/api/${version ? version : 'v1'}/${url}`
      : `${this.usersEndPoint}:${port}/api/${version ? version : 'v1'}/${url}`;
    return this.restService.request<TRequest, TResponse>({
      method: 'DELETE',
      url: apiUrl,
      withoutBody: true,
      showToaster: false,
    });
  }

  sendGetImageRequest(url: string, port: number): Observable<any> {
    const apiUrl = this.inProduction
      ? `${this.usersEndPoint}/api/v1/${url}`
      : `${this.usersEndPoint}:${port}/api/v1/${url}`;
    return this.http.get(apiUrl, { responseType: 'blob' }).pipe(
      map((response: Blob) => {
        const imageUrl = URL.createObjectURL(response);
        return imageUrl;
      })
    );
  }

  uploadImage(data: any, port: number) {
    return this.restService.request({
      method: 'POST',
      url: this.inProduction
        ? `${this.usersEndPoint}/api/v1/media/upload-image`
        : `${this.usersEndPoint}:${port}/api/v1/media/upload-image`,
      body: data,
      withoutBody: true,
      isFormData: true,
      showToaster: false,
    });
  }

  getInvalidControls(form: FormGroup): string[] {
    return Object.keys(form.controls).filter(
      (key) => form.controls[key].invalid
    );
  }


  convertToGMT(dateString: string) {
    if (dateString) {
      const date = new Date(dateString);
      return new Date(
        Date.UTC(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes(),
          date.getSeconds()
        )
      ).toISOString();
    }
    return null;
  }

  convertToGMTTWO(dateString: string): string | null {
    if (dateString) {
      const date = new Date(dateString);
      const gmtDate = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
      );
      return gmtDate.toISOString().split('T')[0];
    }
    return null;
  }




}
