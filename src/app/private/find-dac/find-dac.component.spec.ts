import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDacComponent } from './find-dac.component';

describe('FindDacComponent', () => {
  let component: FindDacComponent;
  let fixture: ComponentFixture<FindDacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
