import { Status } from './StatusEnum';

export class CharacterDetail {
  name: string;  //= this.character.name; How do I make sure it's the same
                 // name as the selected character
  status: Status;
  level: number;
  experience: number;
  character_class: string;
  race: string;
  alignment: string;
  deity: string;
  size: string;
  age: number;
  gender: string;
  height: number;
  weight: string;
  eyes: string;
  hair: string;
}
