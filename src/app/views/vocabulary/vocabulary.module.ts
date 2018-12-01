import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VocabularyComponent } from './vocabulary.component';

@NgModule({
  declarations: [ VocabularyComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    VocabularyComponent
  ]
})
export class VocabularyModule { }
