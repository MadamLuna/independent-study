import { Injectable } from '@angular/core';
import { Character } from '../CharacterClass';
import { CHARACTERS } from './mock-characters';

// import 'rxjs/add/operator/toPromise';


@Injectable()
export class CharacterService {

  getCharacters(): Promise<Character[]> {
    return Promise.resolve(CHARACTERS);
  }

  getCharacter(name: string): Promise<Character> {
    return this.getCharacters()
      .then(characters => characters.find
        (character => character.name === name ))
  }
}
