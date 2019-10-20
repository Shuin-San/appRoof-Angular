import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProJumbotronComponent } from './pro-jumbotron.component';

describe('ProJumbotronComponent', () => {
  let component: ProJumbotronComponent;
  let fixture: ComponentFixture<ProJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
