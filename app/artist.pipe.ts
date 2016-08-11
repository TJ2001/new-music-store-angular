import {Pipe, PipeTransform} from 'angular2/core';
import {Album} from './album.model';

@Pipe({
  name: "genre",
  pure: false
})
