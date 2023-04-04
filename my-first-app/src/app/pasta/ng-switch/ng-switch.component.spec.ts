import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwichComponent } from './ng-swich.component';

describe('NgSwichComponent', () => {
  let component: NgSwichComponent;
  let fixture: ComponentFixture<NgSwichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
