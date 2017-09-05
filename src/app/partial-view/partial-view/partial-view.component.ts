import { Component, ComponentFactoryResolver, Input, ViewChild,
   ViewContainerRef, ChangeDetectorRef,
   OnInit,
   AfterViewInit, AfterViewChecked,
   AfterContentInit, AfterContentChecked,
   DoCheck, OnChanges, Injector, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-partial-view',
  templateUrl: './partial-view.component.html',
  styleUrls: ['./partial-view.component.css']
})
export class PartialViewComponent implements  OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked,
DoCheck, OnChanges, OnDestroy {
  @Input() componentRef: any;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
   }

  ngAfterContentInit() {
    console.log('partialViewComponent ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log('partialViewComponent ngAfterViewInit');
  }
  ngOnInit() {
    console.log('partialViewComponent ngOnInit');
  }

  ngOnDestroy() {
    console.log('partialViewComponent ngOnDestroy');
  }

  ngAfterViewChecked() {
    console.log('partialViewComponent ngAfterViewChecked');

  }
  ngAfterContentChecked() {
    console.log('partialViewComponent ngAfterContentChecked');
  }
  ngDoCheck() {
    console.log('partialViewComponent ngDoCheck');
  }
  ngOnChanges() {
    console.log('partialViewComponent ngOnChanges');
  }

  close() {
  }

}
