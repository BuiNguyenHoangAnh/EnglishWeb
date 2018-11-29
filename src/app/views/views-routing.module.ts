import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { GameComponent } from './game/game.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';


const routes: Routes = [{
  path: '',
  component: ViewsComponent,
  children: [{
    path: 'app-game',
    component: GameComponent,
  }, {
    path: 'app-help',
    component: HelpComponent,
  }, {
    path: 'app-home',
    component: HomeComponent,
  }, {
    path: 'app-story',
    component: StoryComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewssRoutingModule { }