import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyWeatherApp';
  getData : string ;
  weather :any;
  arrayItems = new Array()
  constructor(private data :DataService){}
  getWeatherData(){
   
  this.data.getData(this.getData).subscribe((data)=>{
    
    console.log(data);
    this.weather =data;
    this.getArray(data);
    console.log(this.arrayItems,"arraayyyy");
  })
 }

 getArray(data){
   for (let index = 0; index < 5; index++) {  
     this.arrayItems[index] = data.list[8*index];
     
   }
 }
}
