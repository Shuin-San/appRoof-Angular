import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbgadvantagesComponent } from './dbgadvantages.component';

describe('DbgadvantagesComponent', () => {
  let component: DbgadvantagesComponent;
  let fixture: ComponentFixture<DbgadvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbgadvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbgadvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
