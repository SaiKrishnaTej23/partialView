import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialViewComponent } from './partial-view.component';

describe('PartialViewComponent', () => {
  let component: PartialViewComponent;
  let fixture: ComponentFixture<PartialViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
