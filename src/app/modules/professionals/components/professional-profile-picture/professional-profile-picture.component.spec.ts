import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalProfilePictureComponent } from './professional-profile-picture.component';

describe('ProfessionalProfilePictureComponent', () => {
  let component: ProfessionalProfilePictureComponent;
  let fixture: ComponentFixture<ProfessionalProfilePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalProfilePictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
