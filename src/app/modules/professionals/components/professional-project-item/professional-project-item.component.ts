import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-professional-project-item',
  templateUrl: './professional-project-item.component.html',
  styleUrls: ['./professional-project-item.component.scss']
})
export class ProfessionalProjectItemComponent {
  @Input() url: string;

}
