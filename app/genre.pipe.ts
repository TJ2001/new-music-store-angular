import {Pipe, PipeTransform} from 'angular2/core';
import {Album} from './album.model';

@Pipe({
  name: "genre",
  pure: false
})
export class GenrePipe implements PipeTransform {
  transform(input: Album[], args){
    if(args[0]==="All") {
      return input;
    } else {
      return input.filter((album) => {
        return album.genre===args[0];
      });
    }
  }
}
