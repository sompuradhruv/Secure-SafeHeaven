import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerPostCommentsComponent } from './cutomer-post-comments.component';

describe('CutomerPostCommentsComponent', () => {
  let component: CutomerPostCommentsComponent;
  let fixture: ComponentFixture<CutomerPostCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutomerPostCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomerPostCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
