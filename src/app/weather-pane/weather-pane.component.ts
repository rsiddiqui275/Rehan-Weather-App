import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-pane',
  templateUrl: './weather-pane.component.html',
  styleUrls: ['./weather-pane.component.css']
})
export class WeatherPaneComponent implements OnInit {
@Input() inputArray;
  constructor() { }

  ngOnInit() {
  }

}
