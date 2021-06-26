import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiComponent } from './pi.component';

describe('PiiComponent', () => {
  let component: PiComponent;
  let fixture: ComponentFixture<PiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});