import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionalService } from '../../service/professional.service';

@Component({
  selector: 'app-professionals-category',
  templateUrl: './professionals-category.component.html',
  styleUrls: ['./professionals-category.component.scss']
})
export class ProfessionalsCategoryComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private professionalService: ProfessionalService) { }
  professionList = ['Architect', 'Electrician', 'Agent', 'Contractor', 'Carpanter', 'Painter', 'Interior designer', 'Sanitary-Hardware Provider'];

  onSelectProfessional(profession: string) {
    this.router.navigate([profession], { relativeTo: this.activatedRoute });
    // this.professionalService.getProfessionals(professional).subscribe();
  }
}
