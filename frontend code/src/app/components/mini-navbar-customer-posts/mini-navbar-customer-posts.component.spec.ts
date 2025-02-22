import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNavbarCustomerPostsComponent } from './mini-navbar-customer-posts.component';

describe('MiniNavbarCustomerPostsComponent', () => {
  let component: MiniNavbarCustomerPostsComponent;
  let fixture: ComponentFixture<MiniNavbarCustomerPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniNavbarCustomerPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniNavbarCustomerPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
