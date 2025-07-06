import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { Observable } from 'rxjs';

export interface News {
  id?: string;
  documentId?: string; // Optional, used for Strapi v4
  title: string;
  content: string;
  publishDate: string;
  tags: string[];
  imageUrl: string;
  summary: string;
  archived?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private endpoint = 'newss';

  constructor(private http: HttpService) {}

  getAll(params?: any): Observable<{ data: News[]; meta: any }> {
    // Strapi v4: /api/news?pagination[page]=1&pagination[pageSize]=10
    return this.http.sendGetRequest<any, { data: News[]; meta: any }>(
      `${this.endpoint}${'?populate=*'}`
    );
  }

  getById(id: number): Observable<{ data: News }> {
    return this.http.sendGetRequest<any, { data: News }>(`${this.endpoint}/${id}?populate=*`);
  }

  create(news: News): Observable<{ data: News }> {
    return this.http.sendPostRequest<any, { data: News }>(`${this.endpoint}`, { data: news });
  }

  update(id: number, news: Partial<News>): Observable<{ data: News }> {
    return this.http.sendPutRequest<any, { data: News }>(`${this.endpoint}/${id}`, { data: news });
  }

  archive(id: number): Observable<{ data: News }> {
    // Assuming "archived" is a boolean field in Strapi
    return this.update(id, { archived: true });
  }

  delete(id: number): Observable<any> {
    return this.http.sendDeleteRequest<any, any>(`${this.endpoint}/${id}`);
  }
}
