import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalProjectItemComponent } from './professional-project-item.component';

describe('ProfessionalProjectItemComponent', () => {
  let component: ProfessionalProjectItemComponent;
  let fixture: ComponentFixture<ProfessionalProjectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalProjectItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
