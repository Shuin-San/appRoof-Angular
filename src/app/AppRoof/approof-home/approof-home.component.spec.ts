import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproofHomeComponent } from './approof-home.component';

describe('ApproofHomeComponent', () => {
  let component: ApproofHomeComponent;
  let fixture: ComponentFixture<ApproofHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproofHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproofHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
