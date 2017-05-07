import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//import { Location }               from '@angular/common';

import { CharacterService } from './character_list/character-list.service';
import { Character } from './CharacterClass';

@Component({
    selector: 'character-info',
    templateUrl: './character-info.component.html',
    styleUrls: ['./character-info.component.css']
})

export class CharacterInfoComponent implements OnInit {
    character: Character;

    constructor(
      private characterService: CharacterService,
      private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      let name = this.route.snapshot.params['name'];
       //this.route.params.switchMap((params: Params) =>
      this.characterService.getCharacter(name)
        .then(character => {console.log(character); this.character = character });
      console.log(name);

  }
}
