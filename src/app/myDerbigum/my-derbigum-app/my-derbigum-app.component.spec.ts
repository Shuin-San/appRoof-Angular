import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDerbigumAppComponent } from './my-derbigum-app.component';

describe('MyDerbigumAppComponent', () => {
  let component: MyDerbigumAppComponent;
  let fixture: ComponentFixture<MyDerbigumAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDerbigumAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDerbigumAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
