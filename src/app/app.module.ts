import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttributeComponent } from './attribute/attribute.component';
import { ComponentComponent } from './component/component.component';
import { StructuralComponent } from './structural/structural.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    ComponentComponent,
    StructuralComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
