import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUpdateAdminComponent } from './event-update-admin.component';

describe('EventUpdateAdminComponent', () => {
  let component: EventUpdateAdminComponent;
  let fixture: ComponentFixture<EventUpdateAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventUpdateAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventUpdateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
