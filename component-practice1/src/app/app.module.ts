import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentTestComponent } from './component-test/component-test.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HeaderComponent } from './header/header.component';
import { InsideComponentComponent } from './task-list/inside-component/inside-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTestComponent,
    TaskListComponent,
    HeaderComponent,
    InsideComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
