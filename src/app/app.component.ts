import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  weatherData:any = []
  searchKey:string = ""
  APIkey:string = "20aef567f424b7f8f9748980721505d9"
  unit:string = "metric"
  date:any = ""
  weatherInfo:any = ""

  constructor(private api:WeatherService){}

  ngOnInit(): void {
    this.searchKey = "Kochi"
    this.getWeather()
    this.setDate()
  }

  setCelcius(){
    this.unit = "metric"
    this.getWeather()
  }

  setFareheit(){
    this.unit = "imperial"
    this.getWeather()
  }

  setDate(){
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(new Date(), 'EEEE, MMMM d, y, h:mm a');
    this.date = formattedDate
  }

  getWeather(){
    this.setDate()
    if(this.searchKey){
      this.api.getweatherAPI(this.searchKey,this.APIkey,this.unit).subscribe({
        next:(res:any)=>{
          this.weatherData = res   
          console.log(this.weatherData);
          this.weatherInfo = this.weatherData.weather[0].main
          // this.searchKey = ""
        },
        error:(reason:any)=>{
          console.log(reason); 
        }
      })
    }
    
  }
  

}
