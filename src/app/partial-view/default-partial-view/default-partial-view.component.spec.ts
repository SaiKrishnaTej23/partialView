import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPartialViewComponent } from './default-partial-view.component';

describe('DefaultPartialViewComponent', () => {
  let component: DefaultPartialViewComponent;
  let fixture: ComponentFixture<DefaultPartialViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPartialViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPartialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
