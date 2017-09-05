import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { PartialViewService } from '../partial-view.service';

@Component({
  selector: 'app-default-partial-view',
  templateUrl: './default-partial-view.component.html',
  styleUrls: ['./default-partial-view.component.css']
})
export class DefaultPartialViewComponent implements OnInit, AfterViewInit, AfterContentInit {
  constructor(private partialService: PartialViewService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  ngAfterContentInit() {

  }

  close() {
    this.partialService.close();
  }
}
