import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { GameComponent } from './game/game.component';
import { HelpComponent } from './help/help.component';
import { StoryComponent } from './story/story.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: '',
  component: ViewsComponent,
  children: [
    // { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '', component:HomeComponent },
    { path: 'game', component: GameComponent }, 
    { path: 'vocabulary', component: VocabularyComponent }, 
    { path: 'help', component: HelpComponent }, 
    { path: 'story', component: StoryComponent }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewssRoutingModule { }