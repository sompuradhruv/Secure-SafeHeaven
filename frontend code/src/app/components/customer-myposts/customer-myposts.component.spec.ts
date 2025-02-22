import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMypostsComponent } from './customer-myposts.component';

describe('CustomerMypostsComponent', () => {
  let component: CustomerMypostsComponent;
  let fixture: ComponentFixture<CustomerMypostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerMypostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerMypostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
