import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProfessional } from '../models/user/user.model';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  professional: IProfessional;
  createUser(professional: IProfessional) {
    return this.http.post('http://localhost:7071/api/professionals', professional).pipe(
      map((result: any) => {
        professional.id = result.ProfessionalId;
      }));
  }

  updateProfessional(updatedProfessional: IProfessional, id: string) {
    return this.http.put('http://localhost:7071/api/professionals?id=' + id, updatedProfessional);
  }

  getProfessional(uid: string): Observable<any> {
    return this.http.get('http://localhost:7071/api/professionals?uid=' + uid).pipe(
      map((result: any) => {
        this.professional = result.documentResponse[0];
        return this.professional;
      })
    )
  }
}
