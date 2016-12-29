import { Component, OnInit } from '@angular/core';
import { PosterListComponent } from "./poster-list/poster-list.component";
import {PosterDetailComponent} from "./poster-detail/poster-detail.component";

@Component({
  selector: 'posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css'],

})
export class PostersComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
