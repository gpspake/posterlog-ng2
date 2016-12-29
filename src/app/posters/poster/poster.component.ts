import {Component, Input} from '@angular/core';
import {Poster} from '../../common/poster.model';

@Component({
  selector: 'poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})

export class PosterComponent {
  @Input() poster: Poster;
}
