import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KUISComponent } from './kuis.component';

describe('KUISComponent', () => {
  let component: KUISComponent;
  let fixture: ComponentFixture<KUISComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KUISComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KUISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
