import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmployeePageComponent } from './registeremployee-page.component';

describe('RegisterUserPageComponent', () => {
  let component: RegisterEmployeePageComponent;
  let fixture: ComponentFixture<RegisterEmployeePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEmployeePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEmployeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
