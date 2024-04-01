import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticleInterface } from '../types/article.interface';
import { ArticleResponseInterface } from '../types/articleResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullURL = `${environment.apiUrl}/articles/${slug}`;
    return this.http
      .get<ArticleResponseInterface>(fullURL)
      .pipe(map((response) => response.article));
  }
}
