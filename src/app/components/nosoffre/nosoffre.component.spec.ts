import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosoffreComponent } from './nosoffre.component';

describe('NosoffreComponent', () => {
  let component: NosoffreComponent;
  let fixture: ComponentFixture<NosoffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosoffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
