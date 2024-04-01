import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  DeleteArticle(slug: string): Observable<{}> {
    const fullURL = `${environment.apiUrl}/articles/${slug}`;
    return this.http.delete(fullURL);
  }
}
