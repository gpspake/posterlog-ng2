import { Component, OnInit, Input } from '@angular/core';

import {Poster} from "../../common/poster.model";

@Component({
  selector: 'poster-detail',
  templateUrl: './poster-detail.component.html',
  styleUrls: ['./poster-detail.component.css']
})
export class PosterDetailComponent implements OnInit {
  @Input() selectedPoster: Poster;

  constructor() { }

  ngOnInit() {
  }

}
