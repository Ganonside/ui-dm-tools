import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombatComponent } from './combat.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CombatComponent],
  exports: [
    CombatComponent
  ]
})
export class CombatModule { }
