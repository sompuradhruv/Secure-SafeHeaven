import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerReportCommentsComponent } from './cutomer-report-comments.component';

describe('CutomerReportCommentsComponent', () => {
  let component: CutomerReportCommentsComponent;
  let fixture: ComponentFixture<CutomerReportCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutomerReportCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomerReportCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
