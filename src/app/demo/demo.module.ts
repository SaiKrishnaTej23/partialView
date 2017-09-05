import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { DemoRoutingModule } from './demo.routing';
import { PartialViewModule } from '../partial-view/partial-view.module';
import { PartialViewComponent } from '../partial-view/partial-view/partial-view.component';

@NgModule({
  imports: [
    CommonModule, DemoRoutingModule, PartialViewModule
  ],
  entryComponents: [PartialViewComponent],
  declarations: [DemoComponent]
})
export class DemoModule { }
