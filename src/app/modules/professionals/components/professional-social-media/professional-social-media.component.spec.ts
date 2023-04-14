import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSocialMediaComponent } from './professional-social-media.component';

describe('ProfessionalSocialMediaComponent', () => {
  let component: ProfessionalSocialMediaComponent;
  let fixture: ComponentFixture<ProfessionalSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalSocialMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
