import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolsComponent],
  exports: [
    ToolsComponent
  ]
})
export class ToolsModule { }
