import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsComponent } from './views.component';
import { HomeModule } from './home/home.module';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { GameModule } from './game/game.module';
import { StoryModule } from './story/story.module';
import { HelpModule } from './help/help.module';

import { TemplatesModule } from './../templates/templates.module';

import { ViewssRoutingModule } from './../views/views-routing.module';

@NgModule({
  declarations: [ViewsComponent],
  imports: [
    CommonModule,
    ViewssRoutingModule,
    HomeModule,
    VocabularyModule,
    GameModule,
    StoryModule,
    HelpModule,
    TemplatesModule
  ]
})
export class ViewsModule { }
