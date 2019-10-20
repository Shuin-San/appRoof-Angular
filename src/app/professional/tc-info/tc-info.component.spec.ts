import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcInfoComponent } from './tc-info.component';

describe('TcInfoComponent', () => {
  let component: TcInfoComponent;
  let fixture: ComponentFixture<TcInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
