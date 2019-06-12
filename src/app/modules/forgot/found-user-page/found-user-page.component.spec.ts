import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundUserPageComponent } from './found-user-page.component';

describe('FoundUserPageComponent', () => {
  let component: FoundUserPageComponent;
  let fixture: ComponentFixture<FoundUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
