import { Component, OnInit } from '@angular/core';
import { SliderService } from '../services/slider.service';
import { WinesService } from '../services/wines.service';
import { ClientsService } from '../services/clients.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:SliderService, private serviceWines:WinesService, private serviceClients:ClientsService) { }

  slider;
  wines;
  clients;
  ngOnInit() {
    this.service.getSlider().subscribe(
      Response => {
        this.slider = Response;
      },
      error => {
        console.log(error);
      }
    );

    this.serviceWines.getWinesHome().subscribe(
      Response => {
        this.wines = Response;
      },
      error => {
        console.log(error);
      }
    );

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
