import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToolsModule } from './tools/tools.module';
import { CombatModule } from './combat/combat.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ToolsModule,
    CombatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
