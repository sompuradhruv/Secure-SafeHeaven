import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReportsComponent } from './customer-reports.component';

describe('CustomerReportsComponent', () => {
  let component: CustomerReportsComponent;
  let fixture: ComponentFixture<CustomerReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
