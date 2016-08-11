import { Component, EventEmitter } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template:`
  <div class="container">
    <h1>Our Music Store App!</h1>
    <album-list
      [albumList]="albums"
      (onAlbumSelect)="albumWasSelected($event)">
    </album-list>
  </div>
  `
})
export class AppComponent {
  public albums: Album [];
  constructor(){
    this.albums = [
      new Album("Second Story", "Open House", 15, "Folk", 0),
      new Album("Joshua Tree", "U2", 13, "Rock", 1),
      new Album("Jimi Hendrix Experience", "Jimi Hendrix", 15, "Rock", 2),
      new Album("8 Mile", "Eminem", 14, "Rap", 3),
      new Album("If the Cap Fits", "Kevin Burke", 15, "Folk", 4),
      new Album("Masters Of Classical Music", "Beethoven", 10, "Classical", 5),
      new Album("Blue Note", "Miles Davis", 20, "Jazz", 6)
    ];
  }
  albumWasSelected(clickedAlbum: Album): void {
    console.log('parent', clickedAlbum);
  }
}
