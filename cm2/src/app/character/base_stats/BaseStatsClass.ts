export class BaseStat {
  public hp: number = 0;
  public speed: number = 0;

  // so this is basically what I want to do
  public armor_bonus: number = 0;
  public shield_bonus: number = 0;
  public dex_modifier: number = 0;
  public size_modifier: number = 0;
  public natural_armor: number = 0;
  public misc_modifier: number = 0;

  public miss_chance: number = 0;
  public armor_check_penalty: number = 0;
  public spell_resistance: number = 0;
  public arcane_spell_failure: number = 0;

  public hit_die_type: number = 0;
  public damage_reduction: number = 0;
  public subdual_damage: number = 0;
  public wounds_current_HP: number = 0;
  public base_attack_bonus: number = 0;

  // Armor Class
  armor_class() : number {
    return 10 +
      Number(this.armor_bonus) +
      Number(this.shield_bonus) +
      Number(this.dex_modifier) +
      Number(this.size_modifier) +
      Number(this.natural_armor) +
      Number(this.misc_modifier);
  }

  // Initiative Modifier
  initiative_modifier() : number {
    return Number(this.dex_modifier) + Number(this.misc_modifier);
  }


}
