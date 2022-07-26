import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAddAdminComponent } from './event-add-admin.component';

describe('EventAddAdminComponent', () => {
  let component: EventAddAdminComponent;
  let fixture: ComponentFixture<EventAddAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAddAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
