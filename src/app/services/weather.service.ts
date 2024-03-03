import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  SERVER_URL:string = "https://api.openweathermap.org/data/2.5/weather"

  constructor(private http:HttpClient) { }

  getweatherAPI(searchKey:string,APIKey:string,unit:string){
    return this.http.get(`${this.SERVER_URL}?q=${searchKey}&appid=${APIKey}&units=${unit}`)
  }
}
