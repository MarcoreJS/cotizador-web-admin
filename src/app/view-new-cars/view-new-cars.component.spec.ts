import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewCarsComponent } from './view-new-cars.component';

describe('ViewNewCarsComponent', () => {
  let component: ViewNewCarsComponent;
  let fixture: ComponentFixture<ViewNewCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNewCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
