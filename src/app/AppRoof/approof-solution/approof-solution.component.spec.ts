import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproofSolutionComponent } from './approof-solution.component';

describe('ApproofSolutionComponent', () => {
  let component: ApproofSolutionComponent;
  let fixture: ComponentFixture<ApproofSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproofSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproofSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
