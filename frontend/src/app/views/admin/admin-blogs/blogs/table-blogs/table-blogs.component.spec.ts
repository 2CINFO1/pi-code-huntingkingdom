import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBlogsComponent } from './table-blogs.component';

describe('TableBlogsComponent', () => {
  let component: TableBlogsComponent;
  let fixture: ComponentFixture<TableBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
