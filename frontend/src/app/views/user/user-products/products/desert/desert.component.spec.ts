import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesertComponent } from './desert.component';

describe('DesertComponent', () => {
  let component: DesertComponent;
  let fixture: ComponentFixture<DesertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
