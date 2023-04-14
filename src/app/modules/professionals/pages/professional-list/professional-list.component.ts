import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProfessional } from '../../../../models/user/user.model';
import { ProfessionalService } from '../../service/professional.service';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.scss']
})
export class ProfessionalListComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private professionalService: ProfessionalService) { }
  professionals: IProfessional[];
  profession: string;
  onSelectProfessional(id: string) {
    this.router.navigate([id], { relativeTo: this.route })
  }

  ngOnInit(): void {
    this.professionals = this.route.snapshot.data['professionals'];
    this.professionalService.professionals = this.professionals;
    this.profession = this.route.snapshot.params['profession']
  }
  deleteProfessional(id: string) {
    let index = this.professionals.map(x => x.id).indexOf(id);
    this.professionals.splice(index, 1);
    this.professionalService.deleteProfessional(id)
  }
}
