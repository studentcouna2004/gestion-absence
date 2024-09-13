import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceModalComponent } from './absence-modal.component';

describe('AbsenceModalComponent', () => {
  let component: AbsenceModalComponent;
  let fixture: ComponentFixture<AbsenceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsenceModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsenceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
