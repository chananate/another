import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinfoPageComponent } from './editinfo-page.component';

describe('EditinfoPageComponent', () => {
  let component: EditinfoPageComponent;
  let fixture: ComponentFixture<EditinfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditinfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
