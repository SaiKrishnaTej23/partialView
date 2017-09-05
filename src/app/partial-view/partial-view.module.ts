import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialViewComponent } from './partial-view/partial-view.component';
import { PartialViewService } from './partial-view.service';

@NgModule({
  imports: [
    CommonModule
  ]
  , entryComponents: []
  , declarations: [PartialViewComponent]
  , providers: [PartialViewService]
  , exports: [PartialViewComponent]
})
export class PartialViewModule { }
