// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Github
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';

// Services
import { GithubService } from './github/shared/github.service';
import { CharacterService } from './character/character_list/character-list.service'

// Character Manager App
// import { rootRouterConfig } from './app.routes';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { CharacterInfoComponent } from './character/character-info.component';
import { CharacterListComponent } from './character/character_list/character-list.component';
import { BaseStatsComponent } from './character/base_stats/base-stats.component';
import { CharacterDetailsComponent } from './character/character_details/character-details.component';
import { FeatsAbilitiesComponent } from './character/feats_abilities/feats-abilities.component';
import { PossessionsComponent } from './character/possessions/possessions.component';
import { SkillsComponent } from './character/skills/skills.component';
import { SpellsComponent } from './character/spells/spells.component';

@NgModule({
  declarations: [
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,

    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,

    CharacterInfoComponent,
    CharacterListComponent,
    BaseStatsComponent,
    CharacterDetailsComponent,
    FeatsAbilitiesComponent,
    PossessionsComponent,
    SkillsComponent,
    SpellsComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // RouterModule.forRoot(rootRouterConfig, { useHash: true })
    AppRoutingModule
  ],

  providers: [
    GithubService,
    CharacterService
  ],

  bootstrap: [ AppComponent ]
})


export class AppModule {

}
