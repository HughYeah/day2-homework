import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployEditComponent } from './employ-edit.component';

describe('EmployEditComponent', () => {
  let component: EmployEditComponent;
  let fixture: ComponentFixture<EmployEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
