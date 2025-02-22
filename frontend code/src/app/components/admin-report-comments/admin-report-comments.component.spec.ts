import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportCommentsComponent } from './admin-report-comments.component';

describe('AdminReportCommentsComponent', () => {
  let component: AdminReportCommentsComponent;
  let fixture: ComponentFixture<AdminReportCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReportCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReportCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
