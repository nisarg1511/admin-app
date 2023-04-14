import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProfessional } from '../../../../models/user/user.model';
import { ProfessionalService } from '../../service/professional.service';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.scss']
})
export class ProfessionalProfileComponent implements OnInit {
  professional: IProfessional;
  id: string;
  viewImage: string;

  constructor(private route: ActivatedRoute, private professionalService: ProfessionalService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['professional_id'];
    this.professional = this.professionalService.getProfesional(this.id)

  }
  selectImage(i: number) {
    this.viewImage = this.professional.images[i];
  }
}
