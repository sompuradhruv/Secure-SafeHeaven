import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSidebarComponent } from './customer-sidebar.component';

describe('CustomerSidebarComponent', () => {
  let component: CustomerSidebarComponent;
  let fixture: ComponentFixture<CustomerSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
