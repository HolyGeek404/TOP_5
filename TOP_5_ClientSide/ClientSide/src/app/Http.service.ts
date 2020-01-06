import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/'

@Injectable({
  providedIn: 'root'
})
export class HttpService
{

  constructor(private http: HttpClient) { }

  getValues(data: string)
  {
    // return this.http.get('https://localhost:5001/api/'+data);
    return data;
  }

}
