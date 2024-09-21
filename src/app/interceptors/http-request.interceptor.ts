import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
       // Clone the request to add custom headers (e.g., Authorization token)
       const modifiedReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.getToken()}`,  // Add your token logic
          'Content-Type': 'application/json'
        }
      });
  
      console.log('HTTP Request Interceptor:', modifiedReq);
  
      // Proceed with the modified request and log the response
      return next.handle(modifiedReq).pipe(
        tap(
          event => {
            // Log or modify the HTTP Response here
            console.log('HTTP Response Interceptor:', event);
          },
          error => {
            // Handle errors globally here (e.g., show a notification, redirect to login)
            console.error('HTTP Error Interceptor:', error);
          }
        )
      );
  }

  private getToken(): string {
    // Implement logic to retrieve your auth token
    return 'your-auth-token';
  }
}
