export class Skill {

    public skill_name: string; 
    public key_ability: string; 

    public ability_modifier: number; 
    public ranks: number; 
    public misc_modifier: number; 

    // Skill Modifer Class = Ability Modifier + Ranks + Misc Modifier
    skill_modifier(): number {
        return +
            Number(this.ability_modifier) +
            Number(this.ranks) +
            Number(this.misc_modifier);
    }

    // TO DO:
    //      1. Skill List Element: Create a list that takes in these elements 
    //      2. Skill List: A list of 

    /*
    skill_list_element(): any {
       return +
        (String(this.skill_name), 
         String(this.key_ability), 
         Number(this.skill_modifier), 
         Number(this.ability_modifier), 
         Number(this.ranks), 
         Number(this.misc_modifier));
    }
    */ 

       // TO DO: Should it be "Skill[]"?
       let skill_list_element: { skill_name: string, 
                                    key_ability: string, 
                                    skill_modifier: number, 
                                    ability_modifier: number, 
                                    ranks: number, 
                                    misc_modifier: number } [] = 
       [
            { skill_name: 'bob', key_ability: 'h', }
       ];
       
}


// Check Box | Skill Name [String] | Key Ability [String] | 
// Skill Modifier [Integer] | "=" | Ability Modifier [Integer] | "+" |
//                                   Ranks [Integer] | "+" | Misc Modifier [Integer] 
