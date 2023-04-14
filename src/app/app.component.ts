import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/authentication/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) { }

  title = 'admin-app';
  ngOnInit() {
    this.authService.userName.subscribe((x: string) => {
      this.user = x;
    });
  }

  user!: string;
}
