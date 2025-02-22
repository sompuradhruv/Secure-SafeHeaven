import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUnionPostsComponent } from './customer-union-posts.component';

describe('CustomerUnionPostsComponent', () => {
  let component: CustomerUnionPostsComponent;
  let fixture: ComponentFixture<CustomerUnionPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerUnionPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerUnionPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
