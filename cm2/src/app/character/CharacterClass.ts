import { BaseStat } from './base_stats/BaseStatsClass';
import { CharacterDetail } from './character_details/CharacterDetailClass';
import { Feat } from './feats_abilities/FeatClass';
import { Ability } from './feats_abilities/AbilityClass';
import { Possession } from './possessions/PossessionClass';
import { Skill } from './skills/SkillClass';
import { Spell } from './spells/SpellClass';


export class Character {
  name: string;               // added
  details: CharacterDetail;
  base_stats: BaseStat;
  feats : Feat[];
  abilities : Ability[];
  possessions : Possession[];
  skills : Skill[];
  spells : Spell[];

  constructor(name: string) {
    this.details = new CharacterDetail();
    this.name = name;
    this.details.name = name;
    this.base_stats = new BaseStat();
    this.feats = [];
    this.abilities = [];
    this.possessions = [];
    this.skills = [];
    this.spells = [];
  }
}
