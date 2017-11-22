import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CombatComponent } from './combat.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [CombatComponent],
  exports: [
    CombatComponent
  ]
})
export class CombatModule { }
