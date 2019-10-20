import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverDerbigumComponent } from './over-derbigum.component';

describe('OverDerbigumComponent', () => {
  let component: OverDerbigumComponent;
  let fixture: ComponentFixture<OverDerbigumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverDerbigumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverDerbigumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
