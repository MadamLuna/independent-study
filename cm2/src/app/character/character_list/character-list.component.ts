import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CharacterService } from './character-list.service';
import { Character } from '../CharacterClass';


@Component({
  selector: 'character-list',
  styleUrls: ['./character-list.component.css'],
  templateUrl: './character-list.component.html',
  providers: [CharacterService]
})

export class CharacterListComponent implements OnInit {
  title: string = "Character List";
  characters: Character[] = [];
  selectedCharacter: Character;

  //constructor(public characterService: CharacterService) {}

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}

  getCharacters(): void {
    this.characterService.getCharacters()
      .then(characters => this.characters = characters);
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }

  gotoCharacterInfo(): void {
    this.router.navigate(['/character-info', this.selectedCharacter.name]);
  }

  add(name: string) {
    this.characters.push(new Character(name));
  }
}
