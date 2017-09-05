import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialViewComponent } from './partial-view/partial-view.component';
import { DefaultPartialViewComponent } from './default-partial-view/default-partial-view.component';
import { PartialViewService } from './partial-view.service';
import { DummyViewComponent } from './dummy-view/dummy-view.component';

@NgModule({
  imports: [
    CommonModule
  ]
  , entryComponents: []
  , declarations: [PartialViewComponent, DefaultPartialViewComponent, DummyViewComponent]
  , providers: [PartialViewService]
  , exports: [PartialViewComponent]
})
export class PartialViewModule { }
