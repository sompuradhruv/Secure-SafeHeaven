import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPostsComponent } from './customer-posts.component';

describe('CustomerPostsComponent', () => {
  let component: CustomerPostsComponent;
  let fixture: ComponentFixture<CustomerPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
