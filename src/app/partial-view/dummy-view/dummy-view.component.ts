import { Component, OnInit,
  AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked,
  DoCheck, OnChanges
} from '@angular/core';

@Component({
  selector: 'app-dummy-view',
  templateUrl: './dummy-view.component.html',
  styleUrls: ['./dummy-view.component.css']
})
export class DummyViewComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked,
DoCheck, OnChanges {
  constructor() { }

  Header: string;

  ngOnInit() {
    console.log('dummyComponent ngOnInit');
    this.Header = 'Name';
  }
  ngAfterViewInit() {
    console.log('dummyComponent ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('dummyComponent ngAfterViewChecked');
  }
  ngAfterContentChecked() {
    console.log('dummyComponent ngAfterContentChecked');
  }
  ngAfterContentInit() {
    console.log('dummyComponent ngAfterContentInit');
  }
  ngDoCheck() {
    console.log('dummyComponent ngDoCheck');
  }
  ngOnChanges() {
    console.log('dummyComponent ngOnChanges');
  }

}
