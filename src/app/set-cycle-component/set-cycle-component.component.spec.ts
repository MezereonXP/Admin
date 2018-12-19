import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCycleComponentComponent } from './set-cycle-component.component';

describe('SetCycleComponentComponent', () => {
  let component: SetCycleComponentComponent;
  let fixture: ComponentFixture<SetCycleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCycleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCycleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
