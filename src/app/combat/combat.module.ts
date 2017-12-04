import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombatComponent } from './combat.component';
import { CombatService } from './combat.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CombatComponent
  ],
  exports: [
    CombatComponent
  ],
  providers: [CombatService]
})
export class CombatModule { }
