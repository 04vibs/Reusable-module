import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataRepresentationComponent } from './table-data-representation.component';

describe('TableDataRepresentationComponent', () => {
  let component: TableDataRepresentationComponent;
  let fixture: ComponentFixture<TableDataRepresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDataRepresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDataRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
