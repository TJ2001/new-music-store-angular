import {Component, EventEmitter} from 'angular2/core';
import {Album} from './album.model';

@Component({
  selector: 'new-album',
  outputs: ['onNewAlbum'],
  template: `
  <input placeholder="Album Title" #newName>
  <input placeholder="Album Artist" #newArtist>
  <input type="number" placeholder="Price" #newPrice>
  <select #newGenre>
    <option value="All">All</option>
    <option value="Rap">Rap</option>
    <option value="Rock">Rock</option>
    <option value="Classical">Classical</option>
    <option value="Folk">Folk</option>
    <option value="Country">Country</option>
  </select>
  <button (click)="addAlbum(newName, newArtist, newPrice, newGenre)" class="btn-success btn-lg add-button">Add</button>
  `
})
export class NewAlbumComponent {
  public onNewAlbum: EventEmitter<Album>;
  constructor() {
    this.onNewAlbum = new EventEmitter();
  }
  addAlbum(name: HTMLInputElement,artist: HTMLInputElement,price: HTMLInputElement,genre: HTMLInputElement) {
    var newAlbum : Album = new Album(name.value, artist.value, parseInt(price.value), genre.value, 0);
    this.onNewAlbum.emit(newAlbum);
    name.value = "";
    artist.value = "";
    price.value = "";
    genre.value = "";
    console.log(newAlbum.name);
  }
}
