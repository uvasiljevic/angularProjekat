import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:MenuService) { }

  menu;
  ngOnInit() {
    this.service.getNav().subscribe(
      Response => {
        this.menu = Response;
      },
      error => {
        console.log(error);
      }
    );

  }

}
