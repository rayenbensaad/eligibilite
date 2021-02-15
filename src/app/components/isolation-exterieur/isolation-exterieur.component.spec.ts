import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsolationExterieurComponent } from './isolation-exterieur.component';

describe('IsolationExterieurComponent', () => {
  let component: IsolationExterieurComponent;
  let fixture: ComponentFixture<IsolationExterieurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsolationExterieurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsolationExterieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
