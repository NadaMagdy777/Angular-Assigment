import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithoutDiscountComponent } from './product-without-discount.component';

describe('ProductWithoutDiscountComponent', () => {
  let component: ProductWithoutDiscountComponent;
  let fixture: ComponentFixture<ProductWithoutDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWithoutDiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductWithoutDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
