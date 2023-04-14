import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IProfessional } from '../../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  professionals: IProfessional[];
  professionalCount: number;
  constructor(private http: HttpClient, private af: AngularFireAuth) { }
  getProfessionals(profession: string) {
    return this.http.get<{ documentResponse: IProfessional[] }>('http://localhost:7071/api/user?profession=' + profession).pipe(
      map((result: any) => {
        this.professionals = result.documentResponse;
        this.professionalCount = this.professionals.length;
        return this.professionals;
      })
    );
  }

  deleteProfessional(id: string) {
    this.http.delete('http://localhost:7071/api/professionals?id=' + id).subscribe(
      (documentResponse: any) => {
        console.log(documentResponse)
      });

  }

  getProfesional(id: string) {
    let index = this.professionals.map(x => x.id).indexOf(id);
    let professional = this.professionals[index];
    return professional;
  }
}
