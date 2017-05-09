import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { CharacterDetail } from './CharacterDetailClass'; 
import { CharacterService } from '../character_list/character-list.service';
import { Character } from '../CharacterClass';


@Component({
  moduleId: String(module.id),
  selector: 'my-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: [ './character-details.component.css' ]
})

// 5-5-2017 4:40 PM: Change: added "implements OnInit"
export class CharacterDetailsComponent implements OnInit{
  characterDetail: CharacterDetail; 
  character: Character;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
 /*   this.route.params.switchMap((params: Params) =>
      this.characterService.getCharacter(params['name']))
          .subscribe(character => this.character = character);
 */ 
    let name = this.route.snapshot.params['name'];

    this.characterService.getCharacter(name)
      .then(character => {
        console.log(character); 
        this.character = character; 
        this.characterDetail = this.character.details; 
        console.log(this.characterDetail);
      })
      console.log(name);
  }
}
