import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostCommentsComponent } from './admin-post-comments.component';

describe('AdminPostCommentsComponent', () => {
  let component: AdminPostCommentsComponent;
  let fixture: ComponentFixture<AdminPostCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPostCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
