/* NOTES: changes made
  - changed folder name to app-routing.module, by convention
  - imported NgModule, RouterModule
  - changed this: export const rootRouterConfig: Routes = [ ...
    to this: const routes: Routes = [ ...  (doesn't really matter though)
    and added: export class AppRoutingModule { }   (may have just been cleaner before)
  - added @NgModule bit
*/

// Basic Components
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';

// Default Components
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

// Character Components
import { CharacterInfoComponent } from './character/character-info.component';
import { CharacterListComponent } from './character/character_list/character-list.component';
import { BaseStatsComponent } from './character/base_stats/base-stats.component';
import { CharacterDetailsComponent } from './character/character_details/character-details.component';
import { FeatsAbilitiesComponent } from './character/feats_abilities/feats-abilities.component';
import { PossessionsComponent } from './character/possessions/possessions.component';
import { SkillsComponent } from './character/skills/skills.component';
import { SpellsComponent } from './character/spells/spells.component';


const routes: Routes = [
  // Default Component Paths
  { path: '', redirectTo: 'home', pathMatch: 'full' },
 
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },

  // Character Component Paths
  { path: 'character-list', component: CharacterListComponent  },
  { path: 'character-info/:name', component: CharacterInfoComponent,
    children: [
      // 7:01 pm 5/2, change: 'character-details/', 'base-stats/'
      // cause: 'feats' and 'base stats' no longer visible, 
      // could click on 'character details'
       { path: 'character-details', component: CharacterDetailsComponent },
       { path: 'base-stats/:name', component: BaseStatsComponent },
       { path: 'feats-abilities', component: FeatsAbilitiesComponent },
       { path: 'possessions', component: PossessionsComponent },
       { path: 'skills', component: SkillsComponent },
       { path: 'spells', component: SpellsComponent }
    ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ] 
  // providers: [ ]      // for guard services
})

export class AppRoutingModule { }
