import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProfessionalService } from '../service/professional.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalResolver implements Resolve<any>{
  constructor(private professionalService: ProfessionalService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let profession = '';
    if (route.params['profession']) {
      profession = route.params['profession'];
      console.log(profession)
    }
    else {
      profession = route.parent.params['profession']
    }
    return this.professionalService.getProfessionals(profession);
  }
}
