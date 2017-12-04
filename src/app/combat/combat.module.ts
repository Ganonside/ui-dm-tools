import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CombatComponent } from './combat.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    CharacterComponent,
    CombatComponent
  ],
  exports: [
    CombatComponent
  ]
})
export class CombatModule { }
