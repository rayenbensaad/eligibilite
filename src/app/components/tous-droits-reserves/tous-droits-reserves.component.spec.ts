import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TousDroitsReservesComponent } from './tous-droits-reserves.component';

describe('TousDroitsReservesComponent', () => {
  let component: TousDroitsReservesComponent;
  let fixture: ComponentFixture<TousDroitsReservesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TousDroitsReservesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TousDroitsReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
