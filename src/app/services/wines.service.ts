import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WinesService {

  constructor(private service:HttpClient) { }

  getWinesHome(){
    var nav=this.service.get("http://localhost:4200/assets/data/winesHome.json");
    return nav;
  }
  getWines(){
    var nav=this.service.get("http://localhost:4200/assets/data/wines.json");
    return nav;
  }
}
