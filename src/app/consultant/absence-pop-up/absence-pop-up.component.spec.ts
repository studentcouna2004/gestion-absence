import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsencePopUpComponent } from './absence-pop-up.component';

describe('AbsencePopUpComponent', () => {
  let component: AbsencePopUpComponent;
  let fixture: ComponentFixture<AbsencePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsencePopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsencePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
