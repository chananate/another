import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentOtpPageComponent } from './sent-otp-page.component';

describe('SentOtpPageComponent', () => {
  let component: SentOtpPageComponent;
  let fixture: ComponentFixture<SentOtpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentOtpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentOtpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
