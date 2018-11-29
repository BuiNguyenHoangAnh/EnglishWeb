import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { HomeComponent } from './home/home.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { GameComponent } from './game/game.component';
import { StoryComponent } from './story/story.component';
import { HelpComponent } from './help/help.component';

import { FooterComponent } from './../templates/footer/footer.component';
import { HeaderComponent } from './../templates/header/header.component';
import { BannerComponent } from './../templates/banner/banner.component';

import { ViewssRoutingModule } from './../views/views-routing.module'

@NgModule({
  declarations: [ViewsComponent],
  imports: [
    CommonModule,
    HomeComponent,
    VocabularyComponent,
    GameComponent,
    StoryComponent,
    HelpComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    ViewssRoutingModule
  ]
})
export class ViewsModule { }
