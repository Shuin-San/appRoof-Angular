import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDealerComponent } from './find-dealer.component';

describe('FindDealerComponent', () => {
  let component: FindDealerComponent;
  let fixture: ComponentFixture<FindDealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
