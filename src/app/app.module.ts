import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JsonViewerComponent } from './json-viewer/json-viewer.component';
import { ExploreRuleComponent } from './explore-rule/explore-rule.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonViewerComponent,
    ExploreRuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
