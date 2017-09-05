import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyViewComponent } from './dummy-view.component';

describe('DummyViewComponent', () => {
  let component: DummyViewComponent;
  let fixture: ComponentFixture<DummyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
