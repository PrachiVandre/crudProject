import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProdByDateComponent } from './view-all-prod-by-date.component';

describe('ViewAllProdByDateComponent', () => {
  let component: ViewAllProdByDateComponent;
  let fixture: ComponentFixture<ViewAllProdByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllProdByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllProdByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
