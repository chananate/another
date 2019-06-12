import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmployeePageComponent } from './registeremployee-next-page.component';

describe('RegisterEmployeeNextPageComponent', () => {
  let component: RegisterEmployeeNextPageComponent;
  let fixture: ComponentFixture<RegisterEmployeeNextPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEmployeeNextPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEmployeeNextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
