import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirEauComponent } from './air-eau.component';

describe('AirEauComponent', () => {
  let component: AirEauComponent;
  let fixture: ComponentFixture<AirEauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirEauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
