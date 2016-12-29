import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostersService } from '../../common/posters.service';
import { Poster } from '../../common/poster.model';
import { PosterComponent } from "../poster/poster.component";

@Component({
  selector: 'poster-list',
  templateUrl: './poster-list.component.html',
  styleUrls: ['./poster-list.component.css']
})
export class PosterListComponent implements OnInit {
  posters: Poster[];

  @Output() posterSelected = new EventEmitter<Poster>();

  constructor(private _postersService: PostersService) {

  }

  onSelected(poster: Poster) {
    console.log('emit', poster);
    this.posterSelected.emit(poster);
  }

  ngOnInit() {
    this.posters = this._postersService.getPosters();
  }

}