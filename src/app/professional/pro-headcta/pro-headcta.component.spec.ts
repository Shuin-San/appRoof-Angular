import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProHeadctaComponent } from './pro-headcta.component';

describe('ProHeadctaComponent', () => {
  let component: ProHeadctaComponent;
  let fixture: ComponentFixture<ProHeadctaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProHeadctaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProHeadctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
