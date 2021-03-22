import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirAirComponent } from './air-air.component';

describe('AirAirComponent', () => {
  let component: AirAirComponent;
  let fixture: ComponentFixture<AirAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
