import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPmComponent } from './customer-pm.component';

describe('CustomerPmComponent', () => {
  let component: CustomerPmComponent;
  let fixture: ComponentFixture<CustomerPmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerPmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
