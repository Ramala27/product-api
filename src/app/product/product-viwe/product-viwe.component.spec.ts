import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViweComponent } from './product-viwe.component';

describe('ProductViweComponent', () => {
  let component: ProductViweComponent;
  let fixture: ComponentFixture<ProductViweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductViweComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductViweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
