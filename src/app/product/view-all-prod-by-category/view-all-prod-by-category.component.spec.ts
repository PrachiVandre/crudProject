import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProdByCategoryComponent } from './view-all-prod-by-category.component';

describe('ViewAllProdByCategoryComponent', () => {
  let component: ViewAllProdByCategoryComponent;
  let fixture: ComponentFixture<ViewAllProdByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllProdByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllProdByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
