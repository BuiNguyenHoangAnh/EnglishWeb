import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { VocabularyService } from './services/vocabulary.service';
import { HttpClientModule } from '@angular/common/http';
import { UnityLinkerModule } from 'ng-unity';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    UnityLinkerModule
    // ViewssRoutingModule
  ],
  providers: [VocabularyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
