import { Component, OnInit } from '@angular/core';
import { PartialViewService } from './partial-view/partial-view.service';
import { DefaultPartialViewComponent } from './partial-view/default-partial-view/default-partial-view.component';
import { DummyViewComponent } from './partial-view/dummy-view/dummy-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
  ) {
  }
  ngOnInit() {

  }
  open() {
  }
}
