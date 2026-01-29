import {Component, Injectable, signal} from '@angular/core';
import {fetchWeatherApi} from 'openmeteo';
import {eases} from 'animejs';
import none = eases.none;

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
@Injectable({
  providedIn: 'root'
})
export class Weather {

  weatherParams = {
    latitude: 51.6061,
    longitude: 10.1326,
    current: ["temperature_2m", "weather_code", "is_day"],
    timezone: "Europe/Berlin",
    forecast_days: 1,
  };
  url = "https://api.open-meteo.com/v1/forecast";
  responses = signal<{time: Date, temperature_2m: number, weather_code: any, is_day: number}>({time: new Date(), temperature_2m: 0, weather_code: "", is_day: 1})

  constructor() {
    fetchWeatherApi(this.url, this.weatherParams).then(value => {
      let c = value[0].current() ? value[0].current() : {time: 0, temperature_2m: 0, is_day: false, precipitation: ""};
      const current = value[0].current()!;
      this.responses.set({
        time: new Date((Number(current.time())) * 1000),
        temperature_2m: current.variables(0)!.value(),
        weather_code: current.variables(1)!.value(),
        is_day: current.variables(2)!.value(),
      })

    });
  }

}
