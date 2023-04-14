import { ComponentFixture, TestBed } from '@angular/core/testing';

import ProfessionalContactDetailsComponent from './professional-contact-details.component';

describe('ProfessionalContactDetailsComponent', () => {
  let component: ProfessionalContactDetailsComponent;
  let fixture: ComponentFixture<ProfessionalContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfessionalContactDetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfessionalContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
