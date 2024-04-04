import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserProfileInterface } from '../types/userProfile.interface';
import { environment } from 'src/environments/environment';
import { GetUserProfileResponseInterface } from '../types/getUserProfileResponse.interface';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`;

    return this.http
      .get<GetUserProfileResponseInterface>(url)
      .pipe(map((res) => res.profile));
  }

  followUnfollowUser(
    action: 'follow' | 'unfollow',
    slug: string,
  ): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}/follow`;

    if (action === 'follow') {
      return this.http
        .post<GetUserProfileResponseInterface>(url, {})
        .pipe(map((res) => res.profile));
    } else {
      return this.http
        .delete<GetUserProfileResponseInterface>(url)
        .pipe(map((res) => res.profile));
    }
  }
}
