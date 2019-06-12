import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserPageComponent } from './registeruser-next-page.component';

describe('RegisterUserNextPageComponent', () => {
  let component: RegisterUserNextPageComponent;
  let fixture: ComponentFixture<RegisterUserNextPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterUserNextPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserNextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
