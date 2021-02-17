import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PompeChaleurComponent } from './pompe-chaleur.component';

describe('PompeChaleurComponent', () => {
  let component: PompeChaleurComponent;
  let fixture: ComponentFixture<PompeChaleurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PompeChaleurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PompeChaleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
