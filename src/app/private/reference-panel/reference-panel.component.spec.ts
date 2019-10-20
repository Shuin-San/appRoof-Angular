import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencePanelComponent } from './reference-panel.component';

describe('ReferencePanelComponent', () => {
  let component: ReferencePanelComponent;
  let fixture: ComponentFixture<ReferencePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferencePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
