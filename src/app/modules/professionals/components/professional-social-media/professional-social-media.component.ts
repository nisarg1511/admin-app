import { Component, Input } from '@angular/core';
import { IProfessional } from '../../../../models/user/user.model';

@Component({
  selector: 'app-professional-social-media',
  templateUrl: './professional-social-media.component.html',
  styleUrls: ['./professional-social-media.component.scss']
})
export class ProfessionalSocialMediaComponent {
  @Input() professional: IProfessional;

}
