import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private service:HttpClient) { }

  getSlider(){
    var nav=this.service.get("http://localhost:4200/assets/data/slider.json");
    return nav;
  }
}
