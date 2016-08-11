import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template:`
  <div class="container">
    <h1>Our Music Store App!</h1>
    <h3>Odjfksajfl </h3>
    <h3 *ngFor="#album of albums">{{ album.name }}, {{ album.artist }}, \${{ album.price }}, {{ album.genre }}</h3>
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
}

export class Album {
  public sold: boolean = false;
  constructor(public name: string, public artist: string, public price: number, public genre: string, public id: number) {

  }
}
