import { Component, Input } from '@angular/core';
import { IProfessional } from '../../../../models/user/user.model';

@Component({
  selector: 'app-professional-contact-details',
  templateUrl: './professional-contact-details.component.html',
  styleUrls: ['./professional-contact-details.component.scss']
})
export class ProfessionalContactDetailsComponent {
  @Input() professional: IProfessional
}
