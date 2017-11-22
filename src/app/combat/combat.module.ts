import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CombatComponent } from './combat.component';
import { MapToIterablePipe } from './mapToIterable.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CombatComponent,
    MapToIterablePipe
  ],
  exports: [
    CombatComponent,
    MapToIterablePipe
  ]
})
export class CombatModule { }
