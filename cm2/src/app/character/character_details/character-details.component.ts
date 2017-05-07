import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

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
  character: Character;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) =>
      this.characterService.getCharacter(params['name']))
          .subscribe(character => this.character = character);
  }
}
