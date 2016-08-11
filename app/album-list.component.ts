import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { NewAlbumComponent } from './new-album.component'
import { GenrePipe } from './genre.pipe'
import { ArtistPipe } from './artist.pipe'

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  pipes: [GenrePipe, ArtistPipe],
  directives: [AlbumComponent, NewAlbumComponent],
  template: `
  <album-display *ngFor="#currentAlbum of albumList | genre:selectedGenre"
    (click)="albumClicked(currentAlbum)"
    [class.selected]="currentAlbum === selectedAlbum"
    [album]="currentAlbum">
  </album-display>
  <new-album (onNewAlbum)="addAlbum($event)"></new-album>
  <select class="form-control" name="genre-select" (change)="chooseGenre($event.target.value)">
    <option value="All">All</option>
    <option value="Rap">Rap</option>
    <option value="Rock">Rock</option>
    <option value="Classical">Classical</option>
    <option value="Folk">Folk</option>
    <option value="Country">Country</option>
  </select>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public allGenre: string[] = ["rap", "folk", "country", "classical", "rock", "all"];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public selectedGenre: string = "All";
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
  chooseGenre(genre: string) {
  this.selectedGenre = genre;
  }
}
