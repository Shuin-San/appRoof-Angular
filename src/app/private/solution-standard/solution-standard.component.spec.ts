import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionStandardComponent } from './solution-standard.component';

describe('SolutionStandardComponent', () => {
  let component: SolutionStandardComponent;
  let fixture: ComponentFixture<SolutionStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
