import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDbgAdvantagesComponent } from './pro-dbg-advantages.component';

describe('ProDbgAdvantagesComponent', () => {
  let component: ProDbgAdvantagesComponent;
  let fixture: ComponentFixture<ProDbgAdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProDbgAdvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProDbgAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
