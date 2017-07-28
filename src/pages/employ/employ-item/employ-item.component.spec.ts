import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployItemComponent } from './employ-item.component';

describe('EmployItemComponent', () => {
  let component: EmployItemComponent;
  let fixture: ComponentFixture<EmployItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
