import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUnionReportsComponent } from './customer-union-reports.component';

describe('CustomerUnionReportsComponent', () => {
  let component: CustomerUnionReportsComponent;
  let fixture: ComponentFixture<CustomerUnionReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerUnionReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerUnionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
