import { Component, Input } from '@angular/core';
import { IProfessional } from '../../../../models/user/user.model';

@Component({
  selector: 'app-professional-profile-picture',
  templateUrl: './professional-profile-picture.component.html',
  styleUrls: ['./professional-profile-picture.component.scss']
})
export class ProfessionalProfilePictureComponent {
  @Input() professional: IProfessional;
}
