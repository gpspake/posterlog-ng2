import { Component, OnInit } from '@angular/core';
import { Poster } from '../common/poster.model';
import { PostersService } from '../common/posters.service';
import {PosterComponent} from "./poster/poster.component";

@Component({
  selector: 'posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css'],

})
export class PostersComponent implements OnInit {
  posters: Poster[];

  constructor(private _postersService: PostersService) {

  }

  ngOnInit() {
    this.posters = this._postersService.getPosters();
  }

}
