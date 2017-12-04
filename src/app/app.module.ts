import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToolsModule } from './tools/tools.module';
import { CombatModule } from './combat/combat.module';

import { CombatService } from './combat.service';

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
  providers: [CombatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
