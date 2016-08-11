import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { NewAlbumComponent } from './new-album.component'

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  directives: [AlbumComponent, NewAlbumComponent],
  template: `
  <album-display *ngFor="#currentAlbum of albumList"
    (click)="albumClicked(currentAlbum)"
    [class.selected]="currentAlbum === selectedAlbum"
    [album]="currentAlbum">
  </album-display>
  <new-album (onNewAlbum)="addAlbum($event)"></new-album>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  constructor(){
    this.onAlbumSelect = new EventEmitter();
  }
  addAlbum(Album) {
    console.log("i'm being called");
    this.albumList.push(Album);
  }
  albumClicked(clickedAlbum: Album): void {
    console.log('child', clickedAlbum);
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
}
