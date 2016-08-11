import { Component, EventEmitter } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';

@Component({
    selector: 'album-display',
    inputs: ['album'],
  template: `
    <h3>{{ album.name }}, {{ album.artist }}, {{ album.price }}, {{ album.genre }}</h3>
  `
})
export class AlbumComponent {
  public album: Album;
}
