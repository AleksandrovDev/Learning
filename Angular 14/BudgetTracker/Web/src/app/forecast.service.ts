import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private readonly http: HttpClient) { }

  createForecast(forecast: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', forecast);
  }
}
