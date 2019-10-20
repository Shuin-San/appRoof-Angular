import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadCtaComponent } from './head-cta.component';

describe('HeadCtaComponent', () => {
  let component: HeadCtaComponent;
  let fixture: ComponentFixture<HeadCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
