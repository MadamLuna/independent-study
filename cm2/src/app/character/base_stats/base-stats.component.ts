import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseStat } from './BaseStatsClass';
import { Character } from '../CharacterClass';
import { CharacterService } from '../character_list/character-list.service';


@Component({
  moduleId: String(module.id),
  selector: 'my-base-stats',
  templateUrl: './base-stats.component.html',
  styleUrls: [ './base-stats.component.css' ]
})


export class BaseStatsComponent implements OnInit {
  stats: BaseStat;
  character: Character;
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {
  }

  ngOnInit() {
    let name = this.route.snapshot.params['name'];
  // this.route.params.switchMap((params: Params) =>  // 5-5-2017 change: uncomment
    this.characterService.getCharacter(name)
      .then(character => {
        console.log(character);
        this.character = character;
        this.stats = this.character.base_stats;
        console.log(this.stats);
      });
    console.log(name);
  }

}
