import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProSecondNavbarComponent } from './pro-second-navbar.component';

describe('ProSecondNavbarComponent', () => {
  let component: ProSecondNavbarComponent;
  let fixture: ComponentFixture<ProSecondNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProSecondNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProSecondNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
