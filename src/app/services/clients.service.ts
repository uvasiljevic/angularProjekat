import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private service:HttpClient) { }

  getClients(){
    var nav=this.service.get("http://localhost:4200/assets/data/clients.json");
    return nav;
  }
}
