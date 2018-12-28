import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { InsertionDirective } from './insertion.directive';

@NgModule({
  declarations: [DialogComponent, InsertionDirective],
  exports: [DialogComponent],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DialogModule { }
