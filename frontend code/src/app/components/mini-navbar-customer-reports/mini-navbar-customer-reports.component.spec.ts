import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNavbarCustomerReportsComponent } from './mini-navbar-customer-reports.component';

describe('MiniNavbarCustomerReportsComponent', () => {
  let component: MiniNavbarCustomerReportsComponent;
  let fixture: ComponentFixture<MiniNavbarCustomerReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniNavbarCustomerReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniNavbarCustomerReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
