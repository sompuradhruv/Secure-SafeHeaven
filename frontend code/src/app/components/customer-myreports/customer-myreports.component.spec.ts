import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMyreportsComponent } from './customer-myreports.component';

describe('CustomerMyreportsComponent', () => {
  let component: CustomerMyreportsComponent;
  let fixture: ComponentFixture<CustomerMyreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerMyreportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerMyreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
