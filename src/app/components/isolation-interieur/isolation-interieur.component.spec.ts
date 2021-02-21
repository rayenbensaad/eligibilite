import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsolationInterieurComponent } from './isolation-interieur.component';

describe('IsolationInterieurComponent', () => {
  let component: IsolationInterieurComponent;
  let fixture: ComponentFixture<IsolationInterieurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsolationInterieurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsolationInterieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
