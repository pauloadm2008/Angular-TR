import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchComponent } from './ng-switch.component';

describe('NgSwichComponent', () => {
  let component: NgSwitchComponent;
  let fixture: ComponentFixture<NgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
