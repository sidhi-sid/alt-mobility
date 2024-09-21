import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getData(endpoint: string): Observable<any>{
    return this.httpClient.get(`${environment.apiUrl}/endpoint`);
  }

  postData(endpoint : string, data : any): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(`${environment.apiUrl}/endpoint`, data, {headers});
  }

  updateData(endpoint: string, data: any): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(`${environment.apiUrl}/endpoint`, {headers});
  }

  deleteData(endpoint: string):Observable<any>{
    return this.httpClient.delete(`${environment.apiUrl}/endpoint`);
  }

}
