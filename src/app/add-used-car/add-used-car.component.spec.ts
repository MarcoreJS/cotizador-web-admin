import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsedCarComponent } from './add-used-car.component';

describe('AddUsedCarComponent', () => {
  let component: AddUsedCarComponent;
  let fixture: ComponentFixture<AddUsedCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUsedCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsedCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
