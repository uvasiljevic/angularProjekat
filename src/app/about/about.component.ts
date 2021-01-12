import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private serviceClients:ClientsService) { }

  
  clients;
  ngOnInit() {
    

    this.serviceClients.getClients().subscribe(
      Response => {
        this.clients = Response;
      },
      error => {
        console.log(error);
      }
    );

  }

}
