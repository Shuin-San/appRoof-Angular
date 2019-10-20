import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalTypeComponent } from './professional-type.component';

describe('ProfessionalTypeComponent', () => {
  let component: ProfessionalTypeComponent;
  let fixture: ComponentFixture<ProfessionalTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
