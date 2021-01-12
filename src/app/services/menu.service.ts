import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private service:HttpClient) { }

  getNav(){
    var nav=this.service.get("http://localhost:4200/assets/data/menu.json");
    return nav;
  }
}
