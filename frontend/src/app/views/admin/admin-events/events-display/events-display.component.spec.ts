import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDisplayComponent } from './events-display.component';

describe('EventsDisplayComponent', () => {
  let component: EventsDisplayComponent;
  let fixture: ComponentFixture<EventsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
