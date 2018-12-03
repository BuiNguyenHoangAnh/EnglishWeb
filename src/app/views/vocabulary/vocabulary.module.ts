import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VocabularyComponent } from './vocabulary.component';

@NgModule({
  declarations: [ VocabularyComponent ],
  imports: [
    CommonModule,
    // RouterModule
  ],
  exports: [
    VocabularyComponent
  ]
})
export class VocabularyModule { }
