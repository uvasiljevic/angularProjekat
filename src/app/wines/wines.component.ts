import { Component, OnInit } from '@angular/core';
import { WinesService } from '../services/wines.service';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {

  constructor(private serviceWines:WinesService) { }

  slider;
  wines;
  clients;
  ngOnInit() {
    

    this.serviceWines.getWines().subscribe(
      Response => {
        this.wines = Response;
      },
      error => {
        console.log(error);
      }
    );

    

  }

}
