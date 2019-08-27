import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiuserreactiveComponent } from './ediuserreactive.component';

describe('EdiuserreactiveComponent', () => {
  let component: EdiuserreactiveComponent;
  let fixture: ComponentFixture<EdiuserreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdiuserreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiuserreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
