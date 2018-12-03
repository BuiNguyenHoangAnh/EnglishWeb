import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameComponent } from './game.component';
import { TemplatesModule } from './../../templates/templates.module';

@NgModule({
  declarations: [ GameComponent ],
  imports: [
    CommonModule,
    TemplatesModule
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
