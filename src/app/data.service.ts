import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  city :string;
  
  url: string = "https://api.openweathermap.org/data/2.5/forecast?q=" ;
  appid: string = "&appid=9f563e1e973f1ae79d0a0f34ebf7a96f&units=metric";
  constructor(private http :HttpClient){}
  
  getData(city){
    if(city!=null){
    return this.http.get(this.url+city+this.appid)
  }
  else{

    alert("plz enter the city");
  }
}
}
