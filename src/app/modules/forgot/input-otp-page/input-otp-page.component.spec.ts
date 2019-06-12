import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOtpPageComponent } from './input-otp-page.component';

describe('InputOtpPageComponent', () => {
  let component: InputOtpPageComponent;
  let fixture: ComponentFixture<InputOtpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOtpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOtpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
