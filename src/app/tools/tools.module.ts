import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolsComponent } from './tools.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ToolsComponent],
  exports: [
    ToolsComponent
  ]
})
export class ToolsModule { }
