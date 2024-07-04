import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthHeaderService {
  public readonly authHeader = this.createBasicAuthHeader(
    environment.WP_API_USERNAME,
    environment.WP_API_PASSWORD,
  );

  private createBasicAuthHeader(
    username: string,
    password: string,
  ): HttpHeaders {
    const encodedCredentials = btoa(`${username}:${password}`);
    return new HttpHeaders({
      Authorization: `Basic ${encodedCredentials}`,
    });
  }
}
