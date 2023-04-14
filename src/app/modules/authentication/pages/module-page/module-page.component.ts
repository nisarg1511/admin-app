import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-module-page',
  templateUrl: './module-page.component.html',
  styleUrls: ['./module-page.component.scss', '../../auth-form-style.scss'],
  host: {
    class: 'h-100'
  }
})
export class ModulePageComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth, private authService: AuthService) { }
  ngOnInit(): void {
    this.afAuth.signOut().then(
      () => {
        this.authService.userName.next('');
      }
    );
  }
}
